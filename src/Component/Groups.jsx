import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { HiMiniUserGroup } from "react-icons/hi2";

const Groups = () => {
  const recentGroups = [
    "Supply Chain & Logistics Man...",
    "Value Stream Mapping",
    "Android Developer Group",
    "Tunisian SAP Consultants",
  ];
  const allGroups = [
    "Programming -Python,Java,C++...",
    "Supply Chain & Logistics Man...",
    "Value Stream Mapping",
    "Android Developer Group",
    "Tunisian SAP Consultants",
  ];
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <ListGroup variant="flush">
          <span className="group-title">Recent</span>
            <ListGroup.Item style={{ textAlign: "start" }}>
              <div className="group-item">
                {recentGroups.map((el) => (
                  <div>
                    <HiMiniUserGroup />
                    <span>{el}</span>
                  </div>
                ))}
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
          <span className="group-title">Groupes</span>
            <ListGroup.Item style={{ textAlign: "start" }}>
              <div className="group-item">
                {allGroups.map((el) => (
                  <div>
                    <HiMiniUserGroup />
                    <span>{el}</span>
                  </div>
                ))}
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
          <span className="group-title">Evénement</span>
            <ListGroup.Item style={{ textAlign: "start" }}>
              <div className="group-item">
                
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
          <span className="group-title">Hashtags suivis</span>
            <ListGroup.Item style={{ textAlign: "start" }}>
              <div className="group-item">
                
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ textAlign: "center" }}>
              <div className="group-item">
                <span style={{textAlign:"center"}}>En découvrir plus </span>
              </div>
            </ListGroup.Item>
          </ListGroup>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Groups;
