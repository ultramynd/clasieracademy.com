import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

export default function Invitation() {
  return (
    <div className="d-flex p-3 mt-4 border-top bg-light academy-invitation">
      <Container>
        <Row>
          <Col xs="auto" className="d-none d-sm-block">
            <img
              style={{
                width: 100,
              }}
              src="/images/invitation.png"
              alt=""
            />
          </Col>
          <Col xs="" className="d-flex p-0">
            <Row className="p-0">
              <Col xs="12" sm="" className="my-auto">
                <strong>Build with Clasier Academy</strong>
                <p className="mb-0">
                  Turn your expertise into structured lessons, stronger books,
                  and a clearer publishing path.
                </p>
              </Col>
              <Col xs="12" lg="auto" className="ml-auto my-auto">
                <Button color="info" className="mt-3 my-lg-auto">
                  Explore courses
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
