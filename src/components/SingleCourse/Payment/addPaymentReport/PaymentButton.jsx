import Icons from "components/common/Icons";
import React, { useState } from "react";
import { Button } from "components/ui/button";
import ModalDialog from "./ModalDialog";

export default function PaymentButton({ course, author }) {
  const [openModal, setOpenModal] = useState(false);

  const toggle = () => setOpenModal(!openModal);

  return (
    <>
      <div className="mt-4">
        <Button
          className="w-100 heading single-course-action"
          size="lg"
          onClick={toggle}
        >
          Buy now
          <Icons icon="arrowRight" className="ml-2 arrow1" />
        </Button>
      </div>
      <ModalDialog
        isOpen={openModal}
        toggle={toggle}
        course={course}
        author={author}
      />
    </>
  );
}
