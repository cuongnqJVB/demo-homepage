import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import "../../sass/global/components/_component.modal.scss";

const Modals = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {
        title,
        name,
        size,
        children,
        className
    } = props;
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal
                show={show}
                size={size}
                onHide={handleClose}
                animation={true}
            >
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                    <div onClick={handleClose}>
                        <img src="./Images/ic-close-modal.svg" alt="" />
                    </div>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modals;