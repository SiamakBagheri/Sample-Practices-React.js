import React from "react";

const FooterItem = ({ state, value }) => {
  return (
    <div className="one-third no-border">
      <div className="stat">{state}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
};

export default FooterItem;
