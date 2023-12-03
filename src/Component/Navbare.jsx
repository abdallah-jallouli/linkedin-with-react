import React from "react";
import Form from "react-bootstrap/Form";
import { AiFillHome } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { NavDropdown } from "react-bootstrap";
import { IoAppsOutline } from "react-icons/io5";
import Image from "react-bootstrap/Image";

const Navbare = () => {
  return (
    <div className="nav-bar">
      <img src={require("./logo.png")} alt="logo" style={{ height: "40px" }} />
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Recherche"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <div className="home">
        <AiFillHome style={{ fontSize: "24px" }} />
        <p>Acceuil</p>
      </div>
      <div className="home">
        <FaUserGroup style={{ fontSize: "24px" }} />
        <p>Réseau</p>
      </div>
      <div className="home">
        <BsBriefcaseFill style={{ fontSize: "24px" }} />
        <p>Offre d'emploi</p>
      </div>
      <div className="home">
        <AiFillMessage style={{ fontSize: "24px" }} />
        <p>Messagerie</p>
      </div>
      <div className="home">
        <IoNotifications style={{ fontSize: "24px" }} />
        <p>Notifications</p>
      </div>
      <div className="profile">
        <Image src={require("./profileImage.jpg")} roundedCircle style={{height : "24px"}} />
        <NavDropdown
          title="Vous"
          // id={`offcanvasNavbarDropdown-expand-${expand}`}
          style={{fontWeight: "200" , fontSize:"12px"}}
        ></NavDropdown>
      </div>
      <div className="for-company">
        <IoAppsOutline style={{ fontSize: "24px" }}/>
        <NavDropdown
          title="Pour les entreprises"
          // id={`offcanvasNavbarDropdown-expand-${expand}`}
          style={{fontWeight: "200" , fontSize:"12px" , padding:"0 10px 0 10px"}}
        ></NavDropdown>
      </div>
      <p style={{fontSize:"14px"  ,fontWeight:"200", width: "125px",color:"rgb(92, 59, 9)" ,textDecoration:"underline solid 1px rgb(92, 59, 9)"}}>Essai Premium pour 0 USD</p>
    </div>
  );
};

export default Navbare;
