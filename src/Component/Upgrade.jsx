import React from "react";
import { Card, Image } from "react-bootstrap";

const Upgrade = () => {
  return (
    <div>
      <Card style={{ width: "18rem" , marginTop:"10px"}}>
        <Card.Body>
          <div className="upgrade-header">
            <p>Abdallah, unlock your full potential with linkedIn premium</p>
            <Image
              src={require("./profileImage.jpg")}
              roundedCircle
              style={{ height: "80px" }}
            />
            <Image
              src={require("./upgrade.png")}
              roundedCircle
              style={{ height: "80px" }}
            />
            <p>See who's viewed your profile in the last 90 days</p>
            <div className="try-button">
              <p>Try for free</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Upgrade;
