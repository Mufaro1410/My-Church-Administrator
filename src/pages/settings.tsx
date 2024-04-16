// const Settings = () => {
//   return <div>Settings</div>;
// };

// export default Settings;

import { useEffect, useState } from "react";
import axios from "axios";

const Settings = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/settings/users");
        setUsers(response.data);
        console.log(users);
        
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  

  return (
    <div>
      <h1>Users</h1>
      <div>
        {
          users && users.length > 0 ? (
            <ul>
              {users.map((user) => <li key={user.id}>{user.firstName}</li>)}
            </ul>
          ) : <h1>No users found</h1>
        }
      </div>
    </div>
  );
};

export default Settings;
