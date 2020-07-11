import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

const Info = ({ data: { author, name, year } }) => {

  return (
    <MDBContainer>
      <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
        <MDBCardBody>
          <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
            { author }
          </MDBCardTitle>
          <MDBCardText>
            { name }
          </MDBCardText>
          <MDBCardText>
            { year }
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
  </MDBContainer>
  );
};

export default Info;
