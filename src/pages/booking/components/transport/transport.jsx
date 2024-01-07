import { useEffect, useState } from 'react';
import { getTransport } from '../../../../backend/api';

import "./transport.css"

export const TransportComponent = ({ transport, updateTransport }) => {
    const [transportList, setTransportList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedTransport, setSelectedTransport] = useState(null);
    const [pickUpLocation, setPickUpLocation] = useState("");
    const [vehicleCount, setVehicleCount] = useState(1);

    
    const calculateTotalCapacity = () => {
        if (selectedTransport && vehicleCount) {
            const capacity = parseInt(selectedTransport.capacity);
            const totalCapacity = capacity * vehicleCount;
            return totalCapacity;
        } else {
            return 0; 
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getTransport();
                const formattedList = response.data.map((item) => ({
                    transport: item.attributes.TransportType,
                    capacity: item.attributes.Capacity,
                    desc: item.attributes.Description,
                }));
                setTransportList(formattedList);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        updateTransport({
            ...transport,
            transportType: selectedTransport,
            pickupLocation: pickUpLocation,
            transpotCount: vehicleCount,
            transportCapacity: calculateTotalCapacity()     
        })
    }, [vehicleCount])


    return (
        <div className="transport">
            <h2>Transport Information</h2>
            {isLoading ? (
                <p>Loading transport data...</p>
            ) : error ? (
                <p>Error fetching data: {error.message}</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Transport</th>
                            <th>Capacity</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {transportList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.transport}</td>
                                <td>{item.capacity}</td>
                                <td>{item.desc}</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="transport"
                                        id={item.id}
                                        value={item}
                                        onChange={() => setSelectedTransport(item.transport)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="input">
                <div className="pick-up-location">
                    <label htmlFor="pickUp">Pick Up Location:</label>
                    <input
                        type="text"
                        id="pickUp"
                        value={pickUpLocation}
                        onChange={(e) => setPickUpLocation(e.target.value)}
                    />
                </div>

                <div className="vehicle-count">
                    <label htmlFor="vehicles">Number of Vehicles:</label>
                    <input
                        type="number"
                        id="vehicles"
                        value={vehicleCount}
                        min="1"
                        onChange={(e) => setVehicleCount(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};
