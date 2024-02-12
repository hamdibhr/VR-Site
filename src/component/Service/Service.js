import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CardText, CardBody, CardTitle, Card } from "reactstrap";
import photoMr from "../../assets/images/Marketing 1.png";
import "./Service.css";

export default function Service() {
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
    {
      title: "Conception Graphics",
      text: "Qu'il s'agisse de logos accrocheurs ou de support marketing convaincants.",
    },
    {
      title: "Conception Graphics",
      text: "Qu'il s'agisse de logos accrocheurs ou de support marketing convaincants.",
    },
  ]);
  return (
    <div>
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
                <p className="Notre">Notre</p>
                <p className="Client">Service</p>
              </div>
              <div>
                <p className="custom-text2">
                  Offrir une large gamme de services est l'une de nos
                  spécialités.
                </p>
              </div>
            </Col>
            <Col xs={7}>
              <img src={photoMr} alt="VR" className="photoMr" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="Comment">
        <p>Comment pouvons-nous vous aider ?</p>
      </div>
      <div>
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
      </div>
    </div>
  );
}
