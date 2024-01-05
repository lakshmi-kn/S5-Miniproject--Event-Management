
export const TransportComponent = ({ transport, updateTransport }) => {
    const { transportType, pickupLocation, transportCount } = transport;

    return (
        <div className="transport">
            <h2>Transport Information</h2>
            <div className="transport-details">
                <div className="transport-property">
                    <label>Transport Type:</label>
                    <input
                        type="text"
                        value={transportType}
                        onChange={(e) => updateTransport({ ...transport, transportType: e.target.value })}
                    />
                </div>

                <div className="transport-property">
                    <label>Pickup Location:</label>
                    <input
                        type="text"
                        value={pickupLocation}
                        onChange={(e) => updateTransport({ ...transport, pickupLocation: e.target.value })}
                    />
                </div>

                <div className="transport-property">
                    <label>Transport Count:</label>
                    <input
                        type="number"
                        value={transportCount}
                        onChange={(e) => updateTransport({ ...transport, transportCount: e.target.value })}
                    />
                </div>
            </div>
        </div>
    );
};
