import React, { useState } from "react";
import "./Acceuil.css";
import photo1 from "../../assets/images/photo.png";
import photo2 from "../../assets/images/photoL.png";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import { CardText, CardBody, CardTitle, Card } from "reactstrap";
const carouselData = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
];

export default function Acceuil() {
  const colorCodes = ["#00000"];
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      title: "Creation Site Internet",
      text: "Visite Virtuelle 360°. Couvrir Votre espace avec la technologie 360°.",
    },
    {
      title: "Virtual Reality 360°",
      text: "Compatible avec tous les supports Mobile, Tablette & Smartphone. Site Web 100% dynamique & Responsive Design.",
    },
    {
      title: "Conception Graphics",
      text: "Qu'il s'agisse de logos accrocheurs ou de support marketing convaincants.",
    },
  ]);

  return (
    <div className="container-fluid">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      ></link>
      <div>
        <div className="w-full px-0 mr-0 ml-0">
          <Row>
            <Col className="p-2" style={{ marginTop: "110px" }}>
              <div>
                <p className="virtual">VIRTUAL</p>
                <p className="vreality">REALITE</p>
              </div>
              <div>
                <p className="custom-text">
                  Lorem ipsum dolor sit amet consectetur. Sed pellentesque
                  nullam. Cursus diam rhoncus faucibus velit.
                </p>
              </div>
              <div>
                <button className="btn1">Decouvrir Plus</button>
                <button className="btn2">Contacter Nous</button>
              </div>
            </Col>
            <Col xs={5}>
              <img src={photo1} alt="VR" className="img img-left" />
            </Col>
          </Row>
        </div>
      </div>
      <Row className="custom-card" style={{ marginTop: "60px" }}>
        {employees.map((employee, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <div className="flex flex-wrap justify-center">
              <Card
                style={{
                  backgroundColor: colorCodes[index],
                  borderRadius: "0 70px 0 70px",
                  width: "350px",
                  height: "320px",
                  boxShadow: "3px 4px 5px rgba(0, 0, 0, 0.6)",
                }}
                className="shadow-md rounded-md p-4"
              >
                <CardBody className="flex flex-col items-center">
                  <CardTitle
                    className="text-xl font-semibold mb-2"
                    style={{
                      textAlign: "center",
                      fontFamily: "Orbitron",
                      fontSize: "23px",
                      fontWeight: "semibold",
                      color: "#000000",
                      marginTop: "-20px",
                      lineHeight: "normal",
                    }}
                  >
                    {employee.title}
                  </CardTitle>
                  <CardText
                    className="text-gray-700"
                    tag="h6"
                    style={{
                      marginTop: "15px",
                      fontFamily: "Oswald",
                      fontWeight: "normal",
                      fontSize: "25px",
                      color: "#000000",
                      lineHeight: "normal",
                    }}
                  >
                    {employee.text}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
      <style>
        {`
          .carousel-indicators [data-bs-target] {
            border-radius: 100%;
            width: 10px;
            height: 10px;
            margin-bottom: 50px;
          }
        `}
      </style>
      <div style={{ marginBottom: "141px", marginTop: "70px" }}>
        <Carousel>
          {carouselData.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                style={{ height: "50vh" }}
                className="d-block w-100"
                src={item.image}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="w-full px-0 mr-0 ml-0">
        <Row>
          <Col xs={12} sm={6}>
            <img src={photo2} alt="VR" className="img2" />
          </Col>
          <Col xs={12} sm={6} className="d-flex align-items-center">
            <Card
              body
              outline
              style={{
                width: "600px",
                height: "478px",
                boxShadow: "3px 4px 5px rgba(0, 0, 0, 0.6)",
                border: "none",
                borderRadius: "30px",
                marginTop: "55px",
              }}
              className="shadow-md rounded-md p-4"
            >
              <CardBody>
                <CardTitle tag="h1" className="vrh1" style={{ color: "black" }}>
                  pourquoi nous choisir ?
                </CardTitle>
                <CardText className="custom-text1">
                  Lorem ipsum dolor sit amet consectetur. Habitant in tortor
                  laoreet leo. Vulputate metus aenean sagittis eleifend nulla
                  libero. Urna eget urna quis sit scelerisque nibh.
                </CardText>
              </CardBody>
              <div>
                <button className="btn1">Decouvrir Plus</button>
                <button className="btn2">Contacter Nous</button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
