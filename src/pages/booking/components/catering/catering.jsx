
export const CateringComponent = ({ catering, setCater }) => {
  const { cateringType, peopleCount, menuItems } = catering;

  const handleMenuChange = (index, value) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index] = value;
    setCater({ ...catering, menuItems: updatedMenuItems });
  };

  return (
    <div className="catering">
      <h2>Catering Information</h2>
      <div className="catering-details">
        <div className="catering-property">
          <label>Catering Type:</label>
          <input
            type="text"
            value={cateringType}
            onChange={(e) => setCater({ ...catering, cateringType: e.target.value })}
          />
        </div>

        <div className="catering-property">
          <label>People Count:</label>
          <input
            type="number"
            value={peopleCount}
            onChange={(e) => setCater({ ...catering, peopleCount: e.target.value })}
          />
        </div>

        <div className="catering-property">
          <label>Menu Items:</label>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleMenuChange(index, e.target.value)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
