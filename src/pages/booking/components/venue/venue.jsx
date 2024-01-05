 
export const VenueComponent = ({ venue, handleChange: updateVenue }) => {
  const { venueName, venueLocation, venueSize, venueInformation } = venue;

  return (
    <div className="venue">
      <h2>Venue Information</h2>
      <div className="venue-details">
        <div className="venue-property">
          <label>Venue Name:</label>
          <input
            type="text"
            value={venueName}   
            onChange={(e) => updateVenue({ ...venue, venueName: e.target.value })}
          />
        </div>

        <div className="venue-property">
          <label>Venue Location:</label>
          <input
            type="text"
            value={venueLocation}
            onChange={(e) => updateVenue({ ...venue, venueLocation: e.target.value })}
          />
        </div>

        <div className="venue-property">
          <label>Venue Size:</label>
          <input
            type="number"
            value={venueSize}
            onChange={(e) => updateVenue({ ...venue, venueSize: e.target.value })}
          />
        </div>

        <div className="venue-property">
          <label>Venue Information:</label>
          <textarea
            value={venueInformation}
            onChange={(e) => updateVenue({ ...venue, venueInformation: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};
