import axios from "axios";
import React, { useState, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import { API_GET_PROFILE } from "../../API_endpoints";

function Profile() {
  const [profileData, setprofileData] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: API_GET_PROFILE,
    }).then((res) => {
      setprofileData(res.data);
      setloading(false);
    });
  }, []);
  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      <h1>Profile </h1>
      {Object.keys(profileData).map((attr) => (
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              {attr}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>{profileData[attr]}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </div>
  );
}

export default Profile;
