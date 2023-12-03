import React from "react";
import { Card, Image } from "react-bootstrap";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";

// const Post = () => {
//   // const posts = [
//   //   {
//   //     profileIMG: "https://media.licdn.com/dms/image/D4E35AQHkYi7zP9dZoQ/profile-framedphoto-shrink_400_400/0/1697817165818?e=1701964800&v=beta&t=n7tTDbW-c1wURRBn6-Z1Dwqt0WJJSofbTzATUorwbf8",
//   //     profileNAME: "Abdallah Jallouli",
//   //     actualJOB: "Ingénieur en Génie Industriel",
//   //     timePOST: "1h",
//   //     postDescrition: "ACTIA Engineering Services continue sa campagne de recrutement des stagiaires de PFE lors du forum d’entreprises SUP'COM 💫",
//   //     imageURL:
//   //       "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
//   //   },
//   //   {
//   //     profileIMG: "https://media.licdn.com/dms/image/C4D03AQHxJxulGjgAeg/profile-displayphoto-shrink_400_400/0/1604522901358?e=1706140800&v=beta&t=oLguljPMCRMnJ0y3RpnvTA81IYJkIEf2K8VegWVDO7k",
//   //     profileNAME: "Ahmed ben Yousef ",
//   //     actualJOB: "Responsable maintenance",
//   //     timePOST: "2h",
//   //     postDescrition: "📈 Comment l'apprentissage de l'analyse des données peut véritablement faire la différence !!",
//   //     imageURL:
//   //       "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
//   //   },
//   //   {
//   //       profileIMG: "https://media.licdn.com/dms/image/C4D03AQHxJxulGjgAeg/profile-displayphoto-shrink_400_400/0/1604522901358?e=1706140800&v=beta&t=oLguljPMCRMnJ0y3RpnvTA81IYJkIEf2K8VegWVDO7k",
//   //       profileNAME: "Ahmed ben Yousef ",
//   //       actualJOB: "Responsable maintenance",
//   //       timePOST: "2h",
//   //       postDescrition: "📈 Comment l'apprentissage de l'analyse des données peut véritablement faire la différence !!",
//   //       imageURL:
//   //         "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
//   //     },
//   //     {
//   //       profileIMG: "https://media.licdn.com/dms/image/C4D03AQHxJxulGjgAeg/profile-displayphoto-shrink_400_400/0/1604522901358?e=1706140800&v=beta&t=oLguljPMCRMnJ0y3RpnvTA81IYJkIEf2K8VegWVDO7k",
//   //       profileNAME: "Ahmed ben Yousef ",
//   //       actualJOB: "Responsable maintenance",
//   //       timePOST: "2h",
//   //       postDescrition: "📈 Comment l'apprentissage de l'analyse des données peut véritablement faire la différence !!",
//   //       imageURL:
//   //         "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg",
//   //     },
//   //     {
//   //       profileIMG: "https://media.licdn.com/dms/image/C4D03AQHxJxulGjgAeg/profile-displayphoto-shrink_400_400/0/1604522901358?e=1706140800&v=beta&t=oLguljPMCRMnJ0y3RpnvTA81IYJkIEf2K8VegWVDO7k",
//   //       profileNAME: "Ahmed ben Yousef ",
//   //       actualJOB: "Responsable maintenance",
//   //       timePOST: "2h",
//   //       postDescrition: "📈 Comment l'apprentissage de l'analyse des données peut véritablement faire la différence !!",
//   //       imageURL:
//   //         "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
//   //     },
//   // ];

  const otherOptions = [
    { icon: <AiOutlineLike />, option: "J'aime" },
    { icon: <FaRegCommentDots />, option: "Commenter" },
    { icon: <BiRepost />, option: "Republier" },
    { icon: <RiSendPlaneFill />, option: "Envoyer" }
  ];
//   return (
//     <div>

//           {posts.map((el) => (
//             <Card>
//             <Card.Body>
//             <div className="content-post">
//               <div className="profile-header">
//                 <Image
//                   src={el.profileIMG}
//                   roundedCircle
//                   style={{ height: "50px" }}
//                 />
//                 <div>
//                   <p style={{ fontWeight: 500, fontSize: "14px" }}>
//                     {el.profileNAME}
//                   </p>
//                   <p>{el.actualJOB}</p>
//                   <p>{el.timePOST}</p>
//                 </div>
//               </div>
//               <p>{el.postDescrition}</p>
//               <img id="image-post" src={el.imageURL} alt="" />
//             </div>
//             <div className="other-option-post">
//             {otherOptions.map((el) => (
//               <div>
//                 {el.icon}
//                 <span>{el.option}</span>
//               </div>
//             ))}
//           </div>
//             </Card.Body>
//       </Card>
//           ))}
//     </div>
//   );
// };

// export default Post;

const Post = (props) => {
  return (
      <div>
          <Card>
            <Card.Body>
              <div className="content-post">
                <div className="profile-header">
                  <Image
                    src={props.profileIMG}
                    roundedCircle
                    style={{ height: "50px" }}
                  />
                  <div>
                    <p style={{ fontWeight: 500, fontSize: "14px" }}>
                      {props.profileNAME}
                    </p>
                    <p>{props.actualJOB}</p>
                    <p>{props.timePOST}</p>
                  </div>
                </div>
                <p>{props.postDescrition}</p>
                <img id="image-post" src={props.imageURL} alt="" />
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

export default Post;
