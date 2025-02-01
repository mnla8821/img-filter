import React, { useEffect, useState } from "react";
import "./About.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
const About = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);

  return (
    <>
      {/* {loading == true ? (
        <Loading />
      ) : (
        <>
          {users.map((item) => (
            <p>{item.title}</p>
          ))}
        </>
      )} */}
    </>
  );
};
export default About;
