import React from "react";
import { Card, Image } from "react-bootstrap";
import { MdPermMedia } from "react-icons/md";
import { TbCalendarEvent } from "react-icons/tb";
import { RiArticleFill } from "react-icons/ri";

const MakePost = () => {
  const otherOptions = [
    { icon: <MdPermMedia />, option: "Médias" },
    { icon: <TbCalendarEvent />, option: "Evénement" },
    { icon: <RiArticleFill />, option: "Rédiger un article" },
  ];
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="make-post">
            <Image
              src={require("./profileImage.jpg")}
              roundedCircle
              style={{ height: "50px" }}
            />
            <div>
              <span>Commencer un post</span>
            </div>
          </div>
          <div className="other-option-post">
            {otherOptions.map((el) => (
              <div>
                {el.icon}
                <span>{el.option}</span>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MakePost;
