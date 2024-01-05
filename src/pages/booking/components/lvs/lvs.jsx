import { useEffect } from "react";

import "./lvs.css"

export const LVSComponent = ({ lvsInfo, updateLvsInfo }) => {

    useEffect(() => {
        console.log(lvsInfo)
    }, [lvsInfo, updateLvsInfo]);

    const handleCheckboxChange = (property, event) => {
        const updatedInfo = {
            ...lvsInfo,
            [property]: event.target.checked,
        };
        updateLvsInfo(updatedInfo);
    };

    const options = [
        { label: 'Lights', property: 'lightsType', description: 'Illuminate the event space with various lighting options.' },
        { label: 'Visuals', property: 'visualsType', description: 'Enhance the visual experience with projections or displays.' },
        { label: 'Sounds', property: 'soundsType', description: 'Provide high-quality audio for the event.' },
        { label: 'Ambient Lighting', property: 'ambientLighting', description: 'Create a specific atmosphere with ambient lighting.' },
        { label: 'Video Projection', property: 'videoProjection', description: 'Project videos or visual content for the audience.' },
        { label: 'Live Performances', property: 'livePerformances', description: 'Include live performances such as music or entertainment.' },
        { label: 'Sound System', property: 'soundSystem', description: 'Ensure a reliable and powerful sound system for the event.' },
    ];

    return (
        <div className="lvs">
            <h2>Lights, Visuals, and Sounds</h2>

            <div className="options">
                {
                    options.map(({ label, property, description }) => (
                        <label key={property} className="lvs_option">
                            {label}:
                            <input
                                className="checkbox"
                                type="checkbox"
                                checked={lvsInfo[property]}
                                onChange={(event) => handleCheckboxChange(property, event)}
                            />
                            <p>{description}</p>
                        </label>
                    ))
                }
            </div>
        </div>
    );
};
