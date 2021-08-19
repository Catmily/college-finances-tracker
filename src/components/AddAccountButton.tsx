import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {InputWithButton} from "./InputWithButton";

export type Props = {
    addAccounts: (account: string) => void;
}

export const AddAccountButton = (props: Props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className={"btn btn-primary btn-block me-2 mt-3"} onClick={handleShow}>
                Add Account
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add a New Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>Add a new account below:</Modal.Body>
                <div className={"px-3"}>
                <InputWithButton actionButton={props.addAccounts} inputText={"Account Name"}/>
            </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
