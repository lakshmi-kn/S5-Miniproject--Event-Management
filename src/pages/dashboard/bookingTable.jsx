import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { getBookingData, deleteBookingData } from "../../backend/api";

import './dashboard.css';

export const BookingTable = () => {
    const [bookings, setBookings] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user')) ?? null
    const [listBookings, setListBookings] = useState([])



    useEffect(() => {
        async function fetchBookingDetails() {
            try {
                const response = await getBookingData(user.id);
                console.log(response)
                setBookings(response)
                setFetched(true)
            } catch (error) {
                // Handle errors as needed
                console.error('Error fetching booking details:', error);
            }
        }
        fetchBookingDetails()
    }, [fetched]);

    const handleViewDetails = (booking) => {
        setSelectedBooking(booking);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setSelectedBooking(null);
        setShowModal(false);
    };

    const handleNewBooking = () => {
        navigate('/new-booking');
    };


    const handleCancelBooking = async (bookingId) => {
        try {
            await deleteBookingData(user.id, bookingId);
            console.log("Success deletion");
            setFetched(false);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="booking_table">
            <button className='new-booking-button' onClick={() => handleNewBooking()}>Create New Booking</button>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Event Date</th>
                        <th>Venue</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings && bookings.map((booking) => {
                            let bookingItem = JSON.parse(booking.data)
                            return (
                                <tr key={booking.id}>
                                    <td>{bookingItem.basicInfo.eventName}</td>
                                    <td>{new Date(bookingItem.basicInfo.eventDate).toLocaleDateString()}</td>
                                    <td>{bookingItem.venue.venueName}</td>
                                    <td>
                                        <button style={{ marginRight: '20px' }} onClick={() => handleViewDetails(bookingItem)}>View Details</button>
                                        <button onClick={() => handleCancelBooking(booking.id)}>Cancel</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {showModal && (
                <Modal
                    isOpen={showModal}
                    onRequestClose={handleModalClose}
                    contentLabel="Booking Details"
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            width: '800px',
                            padding: '20px',
                            borderRadius: '5px',
                            background: '#fff',
                            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)',
                            overflowY: 'scroll',
                            height: '600px'
                        },
                    }}
                >
                    <h2>Booking Details</h2>

                    <div className="booking-details">
                        <h3>Basic Information</h3>
                        <ul>
                            <li>Event Name: {selectedBooking.basicInfo.eventName}</li>
                            <li>Event Date: {new Date(selectedBooking.basicInfo.eventDate).toLocaleDateString()}</li>
                            <li>Event Location: {selectedBooking.basicInfo.eventLocation}</li>
                            <li>Event Timings: {selectedBooking.basicInfo.eventTimings}</li>
                            <li>Description: {selectedBooking.basicInfo.eventDescription}</li>
                        </ul>

                        <h3>Venue</h3>
                        <ul>
                            <li>Venue Name: {selectedBooking.venue.venueName}</li>
                            <li>Venue Location: {selectedBooking.venue.venueLocation}</li>
                            <li>Venue Size: {selectedBooking.venue.venueSize}</li>
                            <li>Venue Information: {selectedBooking.venue.venueInformation}</li>
                            <li>Venue Price: {selectedBooking.venue.venuePrice}</li>
                        </ul>

                        <h3>Transport</h3>
                        <ul>
                            <li>Transport Type: {selectedBooking.transport.transportType}</li>
                            <li>Pickup Location: {selectedBooking.transport.pickupLocation}</li>
                            <li>Transport Count: {selectedBooking.transport.transpotCount}</li>
                            {selectedBooking.transport.transportCapacity && <li>Transport Capacity: {selectedBooking.transport.transportCapacity}</li>}
                        </ul>

                        <h3>Catering</h3>
                        <ul>
                            <li>Caterer Name: {selectedBooking.catering.catererName}</li>
                            <li>Catering Type: {selectedBooking.catering.cateringType}</li>
                            <li>People Count: {selectedBooking.catering.peopleCount}</li>
                            <li>Menu Items: {selectedBooking.catering.menuItems.join(', ')}</li>
                            <li>Catering Price: {selectedBooking.catering.caterPrice}</li>
                        </ul>

                        <h3>Lights, Visuals, and Sounds (LVS)</h3>
                        <ul>
                            <li>Lights Type: {selectedBooking.lvs.lightsType ? 'Yes' : 'No'}</li>
                            <li>Visuals Type: {selectedBooking.lvs.visualsType ? 'Yes' : 'No'}</li>
                            <li>Sounds Type: {selectedBooking.lvs.soundsType ? 'Yes' : 'No'}</li>
                            <li>Ambient Lighting: {selectedBooking.lvs.ambientLighting ? 'Yes' : 'No'}</li>
                            <li>Video Projection: {selectedBooking.lvs.videoProjection ? 'Yes' : 'No'}</li>
                            <li>Live Performances: {selectedBooking.lvs.livePerformances ? 'Yes' : 'No'}</li>
                            <li>Sound System: {selectedBooking.lvs.soundSystem ? 'Yes' : 'No'}</li>
                        </ul>
                    </div>

                    <button onClick={handleModalClose}>Close</button>
                </Modal>
            )}
        </div>
    );
}