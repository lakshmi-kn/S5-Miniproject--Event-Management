import React from 'react';

const InformationPanel = ({ combinedData }) => {
    return (
        <div className="information-panel">
            {combinedData && (
                <>
                    <h2>Event Information</h2>

                    <div className="section section-basic">
                        <h3>Basic Information</h3>
                        <ul>
                            <li>Date: {combinedData.basicInfo.eventDate.toLocaleDateString()}</li>
                            <li>Name: {combinedData.basicInfo.eventName}</li>
                            <li>Location: {combinedData.basicInfo.eventLocation}</li>
                            <li>Description: {combinedData.basicInfo.eventDescription}</li>
                            <li>Timings: {combinedData.basicInfo.eventTimings}</li>
                        </ul>
                    </div>

                    <div className="section section-venue">
                        <h3>Venue</h3>
                        <ul>
                            <li>Name: {combinedData.venue.venueName}</li>
                            <li>Location: {combinedData.venue.venueLocation}</li>
                            <li>Size: {combinedData.venue.venueSize}</li>
                            <li>Information: {combinedData.venue.venueInformation}</li>
                            <li>Price: {combinedData.venue.venuePrice}</li>
                        </ul>
                    </div>

                    <div className="section section-transport">
                        <h3>Transport</h3>
                        <ul>
                            <li>Type: {combinedData.transport.transportType}</li>
                            <li>Pickup Location: {combinedData.transport.pickupLocation}</li>
                            <li>Vehicle Count: {combinedData.transport.transpotCount}</li>
                            <li>Total Capacity: {combinedData.transport.transportCapacity}</li>
                        </ul>
                    </div>

                    <div className="section section-catering">
                        <h3>Catering</h3>
                        <ul>
                            <li>Caterer Name: {combinedData.catering.catererName}</li>
                            <li>Catering Type: {combinedData.catering.cateringType}</li>
                            <li>People Count: {combinedData.catering.peopleCount}</li>
                            <li>Menu Items: {combinedData.catering.menuItems.join(', ')}</li>
                            <li>Price: {combinedData.catering.caterPrice}</li>
                        </ul>
                    </div>

                    <div className="section section-lvs">
                        <h3>Lights, Visual and Sound</h3>
                        <ul>
                            <li>Light system: {combinedData.lvs.lightsType}</li>
                            <li>Visuals: {combinedData.lvs.visualsType}</li>
                            <li>Sound system: {combinedData.lvs.soundsType}</li>
                            <li>Ambient Lighting: {combinedData.lvs.ambientLighting}</li>
                            <li>Video Projection: {combinedData.lvs.videoProjection}</li>
                            <li>Live Projection: {combinedData.lvs.livePerformances}</li>
                            <li>Sound System: {combinedData.lvs.soundSystem}</li>
                        </ul>
                    </div>
                </>
            )}
            {!combinedData && (
                <p className="error-message">
                    Please complete event information to view details and generate the bill.
                </p>
            )}
        </div>
    );
};

export default InformationPanel;
