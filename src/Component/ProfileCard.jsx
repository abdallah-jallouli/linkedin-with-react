import React from "react";
import { Card, Image, ListGroup } from "react-bootstrap";
import { MdWorkspacePremium } from "react-icons/md";
import { MdOutlineBookmark } from "react-icons/md";



const ProfileCard = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={require("./couverture.jpg")} />
        <Card.Body>
          <Image
            src={require("./profileImage.jpg")}
            roundedCircle
            style={{ height: "80px", marginTop: "-70px" }}
          />
          <Card.Title>Abdallah Jallouli</Card.Title>
          <Card.Text>Ingénieur en Génie Industriel</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item style={{textAlign:"start"}}>
              <div className="profile-item">
                <p>Vue de profile </p>
                <p>50</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{textAlign:"start"}}>
              <div className="profile-item">
                <p>Relations </p>
                <p>512</p>
                </div>
                <span>Gérer votre réseau</span>
            </ListGroup.Item>
            <ListGroup.Item style={{textAlign:"start"}}>
              <div >
                <span>Accéder à des infos et des outils exclusifs</span>
                <div className="profile-info-icon">
                  <MdWorkspacePremium/>
                  <span>Essai premium pour 0 USD</span>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{textAlign:"start" , alignItems:"center"}}>
                <div className="profile-info-icon">
                  <MdOutlineBookmark style={{marginRight:"8px"}}/>
                  <span>Mes éléments</span>
                </div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileCard;
