import React from "react";
import { Card, ListGroup, Image } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Suivre = () => {
  const pages = [
    {
      pageIMG:
        "https://media.licdn.com/dms/image/D4E0BAQFXzsgA1XMMtg/company-logo_200_200/0/1682688176864?e=1708560000&v=beta&t=a5rHTr0-fG1TJgclNA6VNozqpZ9rdWTqj-tc09huwqU",
      pageName: "habemus! Solutions",
      pageActivity: "Entreprise . Logiciels informatiques",
    },
    {
      pageIMG:
        "https://media.licdn.com/dms/image/D4E0BAQFXzsgA1XMMtg/company-logo_200_200/0/1682688176864?e=1708560000&v=beta&t=a5rHTr0-fG1TJgclNA6VNozqpZ9rdWTqj-tc09huwqU",
      pageName: "habemus! Solutions",
      pageActivity: "Entreprise . Logiciels informatiques",
    },
  ];
  return (
    <div>
      <Card style={{ width: "18rem" , height:"374px" }}>
        <Card.Body>
          <ListGroup variant="flush">
            <span className="group-title">Ajouter à votre fils d'actualité</span>
            <ListGroup.Item style={{ textAlign: "start" }}>
              <div className="group-item">
                {pages.map((el) => (
                  <div className="profile-header">
                    <Image
                      src={el.pageIMG}
                      roundedCircle
                      style={{ height: "50px" }}
                    />
                    <div>
                  <p style={{ fontWeight: 500, fontSize: "14px",color:"#000" }}>
                    {el.pageName}
                  </p>
                  <p>{el.pageActivity}</p>
                  <div className="follow-button">
                  <FaPlus/>
                    <p style={{fontWeight:"700", marginLeft:"5px"}}>Suivre</p>
                  </div>
                </div>
                  </div>
                ))}
                <div className="suggestions">
                    <p>Voir toutes les suggestions</p>
                    <FaArrowRight/>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Suivre;
