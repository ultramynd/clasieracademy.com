import Icons from "components/common/Icons";
// import PaymentReports from "fetchers/paymentReports";
import React, { useState } from "react";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
// import ModalDialog from "./ModalDialog";

export default function PreviewButton({ course, author, currentReport }) {
  const [openModal, setOpenModal] = useState(false);

  const toggle = () => setOpenModal(!openModal);

  const handleDeleteReport = (e) => {
    e.preventDefault();
    // new PaymentReports().deleteReport(currentReport);
  };

  return (
    <>
      <p className="mb-0 mt-4">Reporte enviado:</p>

      <Card>
        <CardContent className="p-2">
          <p className="m-0 p-0">ID: {currentReport._id}</p>
          <Button variant="success" size="sm" className="mr-2" onClick={toggle}>
            <Icons icon="eye" />
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="heading"
            onClick={handleDeleteReport}
          >
            <Icons icon="trash" />
          </Button>
        </CardContent>
      </Card>
      <div className="mt-4"></div>
      {/* <ModalDialog
        isOpen={!openModal}
        toggle={toggle}
        course={course}
        author={author}
      /> */}
    </>
  );
}
