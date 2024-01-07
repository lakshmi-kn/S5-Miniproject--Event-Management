import { useState } from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './bi.css';

export const BasicInfoComponent = ({ basicInfo, updateBasicInfo }) => {
    const { eventDate, eventName, eventLocation, eventDescription, eventTimings } = basicInfo;
    const [selectedTime, setSelectedTime] = useState(eventTimings);

    const handleDateChange = (newDate) => {
        updateBasicInfo({
            ...basicInfo,
            eventDate: newDate,
        });
    };

    const handleEventTimingsChange = (newTime) => {
        setSelectedTime(newTime);
        updateBasicInfo({
            ...basicInfo,
            eventTimings: newTime,
        });
    };

    return (
        <div className="date-time">
            <h2>Basic Information</h2>

            <div className="block">
                <div className="calendar">
                    <Calendar onChange={handleDateChange} value={eventDate} className={"calendar"} />
                </div>

                <div className="event_details">
                    <div className="event_name">
                        <label>Event Name:</label>
                        <input
                            type="text"
                            value={eventName}
                            onChange={(e) => updateBasicInfo({ ...basicInfo, eventName: e.target.value })}
                        />
                    </div>

                    <div className="event_location">
                        <label>Event Location:</label>
                        <input
                            type="text"
                            value={eventLocation}
                            onChange={(e) => updateBasicInfo({ ...basicInfo, eventLocation: e.target.value })}
                        />
                    </div>

                    <div className="event_description">
                        <label>Event Description:</label>
                        <textarea
                            value={eventDescription}
                            onChange={(e) => updateBasicInfo({ ...basicInfo, eventDescription: e.target.value })}
                        />
                    </div>

                    <div className="event_time">
                        <label>Event Timings:</label>
                        <TimePicker
                            className="custom-time-picker"
                            onChange={handleEventTimingsChange}
                            value={selectedTime}
                            clockClassName="custom-clock"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
