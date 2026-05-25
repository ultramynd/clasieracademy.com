import Icons from "components/common/Icons";
import React from "react";

// reactstrap components
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

export default class Certificates extends React.Component {
  render() {
    return (
      <>
        <Card className="shadow-md">
          <CardHeader className="py-1 px-2">
            <CardTitle tag="h6" className="m-0">
              <Icons icon="books" className="mr-2" />
              Certificates
            </CardTitle>
          </CardHeader>
          <CardBody>No certificates to show yet.</CardBody>
        </Card>

        <Card className="mt-4 shadow-md">
          <CardHeader className="py-1 px-2">
            <CardTitle tag="h6" className="m-0">
              <Icons icon="books" className="mr-2" />
              Courses
            </CardTitle>
          </CardHeader>
          <CardBody>No courses to show yet.</CardBody>
        </Card>

        <Card className="mt-4 shadow-md">
          <CardHeader className="py-1 px-2">
            <CardTitle tag="h6" className="m-0">
              <Icons icon="books" className="mr-2" />
              Sessions
            </CardTitle>
          </CardHeader>
          <CardBody>No sessions to show yet.</CardBody>
        </Card>
      </>
    );
  }
}
