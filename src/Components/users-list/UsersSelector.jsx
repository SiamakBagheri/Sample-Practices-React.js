import React from "react";

const UsersSelector = (props) => {
  return (
    <p className="section">
      Users:
      {props.users &&
        props.users.map((user, index) => {
          return (
            <label key={user}>
              <input
                onChange={()=> props.handleChangeUser(index)}
                checked={index === props.selectedIndex}
                type="radio"
                name="user"
              />
              {user}
            </label>
          );
        })}
    </p>
  );
};

export default UsersSelector;
