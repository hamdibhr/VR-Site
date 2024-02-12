import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon
                  color="secondary"
                  icon="gem"
                  className="me-3"
                  style={{ fontSize: "4rem" }}
                />
                Logo Site Web
              </h6>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liens Utiles</h6>
              <p>
                <a href="#!" className="text-reset">
                  Accueil
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Service
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Projet
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Centre D’aide</h6>
              <p>
                <a href="#!" className="text-reset">
                  Contacter Nous
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Partner</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                <a href="#!" className="text-reset">
                  Nos Client
                </a>
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-2" />
                <a href="#!" className="text-reset">
                  Devient un Client
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top">
        <div className="me-5 d-none d-lg-block">
          <span>Tunisie VR Ⓒ 2020 , All Rights Reserved.</span>
        </div>
      </section>
    </MDBFooter>
  );
}
