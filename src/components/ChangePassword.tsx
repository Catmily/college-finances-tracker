import {useState} from "react";
import {Button, Dropdown, FormControl, InputGroup, Modal} from "react-bootstrap";
import * as React from "react";
import {BankDropdown} from "./BankDropdown";
import {InputWithButton} from "./InputWithButton";
import {Input} from "./Input";


export type NormalProps = {
    actionButton: (oldPassword: string, newPassword: string) => void;
    closeButton: (arg0: boolean) => void;
}

export const ChangePassword = (props :  NormalProps) => {
    const [value, setValue] = useState<string>("");
    const [show, setShow] = useState(true);

    const handleClose = () => { setShow(false); props.closeButton(false);}
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Change your Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                </Modal.Body>
                <div className={"px-3"}>
                    <Input inputText={"Old Password"}/>
                    <Input inputText={"New Password"}/>
                    <Input inputText={"New Password (again)"}/>

                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Change Password
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
