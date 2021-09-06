//rfce
import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getData = await axios.get("http://localhost:4002/signup/get", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      console.log(getData);
      setData(getData.data.getAllUsers);
    };
    fetchData();
  }, []);
  return (
    <div>
   
      <table className="table table-hover table-primary table-bordered">
        <thead className="table table-dark">
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr>
                <td>{item._id}</td>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.phone_number}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
