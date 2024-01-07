import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Tab, TabPanel, TabList, Tabs } from 'react-tabs'
import { BasicInfoComponent } from './components/basic_info/basic_info';
import { VenueComponent } from './components/venue/venue';
import { TransportComponent } from './components/transport/transport';
import { CateringComponent } from './components/catering/catering';
import { LVSComponent } from "./components/lvs/lvs";

import 'react-tabs/style/react-tabs.css';
import 'react-calendar/dist/Calendar.css';
import "./booking.css"


import logo from "../../assets/logo.png"
import profileIcon from "../../assets/profile.svg"
import InformationPanel from './bill/bill';


export const NewBooking = () => {
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0)
    const [dataReady, setDataReady] = useState(false)

    const [basicInfo, setBasicInfo] = useState(
        {
            eventDate: new Date(),
            eventName: '',
            eventLocation: '',
            eventDescription: '',
            eventTimings: '',
        }
    )
    const [venue, setVenue] = useState(
        {
            venueName: '',
            venueLocation: '',
            venueSize: 0,
            venueInformation: '',
            venuePrice: ''
        }
    )
    const [transport, setTransport] = useState(
        {
            transportType: '',
            pickupLocation: '',
            transpotCount: 0,
            transportCapacity: 0
        }
    )
    const [catering, setCater] = useState(
        {
            catererName: '',
            cateringType: '',
            peopleCount: 0,
            menuItems: [],
            caterPrice: 0
        }
    )

    const [lvsInfo, setLvsInfo] = useState(
        {
            lightsType: false,
            visualsType: false,
            soundsType: false,
            ambientLighting: false,
            videoProjection: false,
            livePerformances: false,
            soundSystem: false,
        }
    )

    // Function to update basicInfo state
    const updateBasicInfo = (updatedBasicInfo) => {
        setBasicInfo((prevBasicInfo) => ({
            ...prevBasicInfo,
            ...updatedBasicInfo,
        }));
    };

    // Function to update venue state
    const updateVenue = (updatedVenue) => {
        setVenue((prevVenue) => ({
            ...prevVenue,
            ...updatedVenue,
        }));
    };

    // Function to update transport state
    const updateTransport = (updatedTransport) => {
        setTransport((prevTransport) => ({
            ...prevTransport,
            ...updatedTransport,
        }));
    };

    // Function to update catering state
    const updateCatering = (updatedCatering) => {
        setCater((prevCatering) => ({
            ...prevCatering,
            ...updatedCatering,
        }));
    };

    // Function to update lvsInfo state
    const updateLvsInfo = (updatedLvsInfo) => {
        setLvsInfo((prevLvsInfo) => ({
            ...prevLvsInfo,
            ...updatedLvsInfo,
        }));
    };

    function revealInfo() {
        const combinedData = {
            basicInfo: basicInfo,
            venue: venue,
            transport: transport,
            catering: catering,
            lvs: lvsInfo,
        };

        return <InformationPanel combinedData={combinedData} />
    }

    return (
        <>
            <div className="header">
                <div className="logo">
                <Link to= "/"><img src={logo} alt="" width={200} /></Link>
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <Link to="/about">About</Link>
                        <Link to='/services' >Services</Link>
                        <Link to="/#contact">Contact Us</Link>
                        <Link to="/gallery">Gallery</Link>
                    </div>
                </div>
            </div>

            <div className="booking">
                <Tabs>
                    <TabList>
                        <Tab>Date and Time</Tab>
                        <Tab>Venue</Tab>
                        <Tab>Transport and Accomodation</Tab>
                        <Tab>Lights, Visuals and Sounds</Tab>
                        <Tab>Catering</Tab>
                        <Tab>Review</Tab>
                    </TabList>

                    <TabPanel>
                        <BasicInfoComponent
                            basicInfo={basicInfo}
                            updateBasicInfo={updateBasicInfo}
                        />
                    </TabPanel>

                    <TabPanel>
                        <VenueComponent
                            venue={venue}
                            updateVenue={updateVenue}
                        />
                    </TabPanel>

                    <TabPanel>
                        <TransportComponent
                            transport={transport}
                            updateTransport={updateTransport}
                        />
                    </TabPanel>

                    <TabPanel>
                        <LVSComponent
                            lvsInfo={lvsInfo}
                            updateLvsInfo={updateLvsInfo}
                        />
                    </TabPanel>

                    <TabPanel>
                        <CateringComponent
                            catering={catering}
                            updateCatering={updateCatering}
                        />
                    </TabPanel>

                    <TabPanel>
                        {revealInfo()}
                    </TabPanel>
                </Tabs>

                <div className="button-container">
                    <button >Submit</button>
                </div>
            </div>
        </>
    )
}