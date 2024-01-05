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


export const NewBooking = () => {
    const [submitDisabled, setSubmitDisabled] = useState(true);
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
        }
    )
    const [transport, setTransport] = useState(
        {
            transportType: '',
            pickupLocation: '',
            transpotCount: 0
        }
    )
    const [catering, setCater] = useState(
        {
            cateringType: '',
            peopleCount: 0,
            menuItems: [],
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

    function handleClick() {
        console.log(basicInfo)
    }

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" width={200} />
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <a href="#about">About</a>
                        <Link to='/services' >Services</Link>
                        <a href="#contact">Contact Us</a>
                        <a href="#gallery">Gallery</a>
                    </div>
                </div>
            </div>

            <div className="booking">
                <Tabs>
                    <TabList>
                        <Tab>Basic Information</Tab>
                        <Tab>Venue</Tab>
                        <Tab>Transport and Accomodation</Tab>
                        <Tab>Catering</Tab>
                        <Tab>Lights, Visuals and Sounds</Tab>
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
                        <CateringComponent
                            catering={catering}
                            updateCatering={updateCatering}
                        />
                    </TabPanel>

                    <TabPanel>
                        <LVSComponent
                            lvsInfo={lvsInfo}
                            updateLvsInfo={updateLvsInfo}
                        />s
                    </TabPanel>
                </Tabs>

                <div className="button-container">
                    <button onClick={handleClick}>Submit</button>
                </div>
            </div>
        </>
    )
}