import Icons from "components/common/Icons";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";

export default class Certificates extends React.Component {
  render() {
    return (
      <>
        <Card className="shadow-md">
          <CardHeader className="py-1 px-2">
            <CardTitle className="m-0">
              <Icons icon="books" className="mr-2" />
              Certificates
            </CardTitle>
          </CardHeader>
          <CardContent>No certificates to show yet.</CardContent>
        </Card>

        <Card className="mt-4 shadow-md">
          <CardHeader className="py-1 px-2">
            <CardTitle className="m-0">
              <Icons icon="books" className="mr-2" />
              Courses
            </CardTitle>
          </CardHeader>
          <CardContent>No courses to show yet.</CardContent>
        </Card>

        <Card className="mt-4 shadow-md">
          <CardHeader className="py-1 px-2">
            <CardTitle className="m-0">
              <Icons icon="books" className="mr-2" />
              Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>No sessions to show yet.</CardContent>
        </Card>
      </>
    );
  }
}
