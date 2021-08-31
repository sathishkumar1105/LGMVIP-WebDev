import React, { useState } from "react";

import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const userInfo = async () => {
    // console.log('before');
    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);
  };

  return (
    <body>
      <div className="App">
        <div className="navbar">
          <img src="https://letsgrowmore.in/wp-content/uploads/2021/05/cropped-growmore-removebg-preview.png" />
          <button onClick={userInfo}>Users</button>
        </div>
        
        
        <div className="data">
          {users.map(({ id, first_name, last_name, email, avatar }) => (
            <div className="content">
              <div className="photo">
                <img src={avatar}></img>
              </div>

              <div className="user-info">
                <label id="name">
                  {first_name} {last_name}
                </label>

                <label>{email}</label>

                <br></br>
              </div>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
};

export default App;
