import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter
      color="blue"
      className="font-small pt-4 mt-4"
      style={{
        color: "#50924b",
        "background-color": "#202852",
        "font-weight": 100,
      }}
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Timings</h5>
            <p>Opening Hours</p>
            <p> Monday - Friday:</p>
            <p>11:30 am – 3:30 pm, 7:00 – 11:30 pm</p>
            <p>Saturday,Sunday:</p>
            <p> 11:30 am – 3:30 pm, 7:00 – 11:00 pm</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact Us</h5>
            <p>20,Chennai High Road</p>
            <p>Anna Salai</p>
            <p>Chennai-25</p>
            <p>+91 9884496180</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.hotelmurugabhavan.com"> murugabhavan.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
