import {useState} from "react";
import {Button, Dropdown, FormControl, InputGroup, Modal} from "react-bootstrap";
import * as React from "react";
import {BankDropdown} from "./BankDropdown";
import {InputWithButton} from "./InputWithButton";


export type NormalProps = {
    actionButton: (bank: string) => void;
    bankAccountNames: string[];
}

export const CloseAccountButton = (props :  NormalProps) => {
    const [value, setValue] = useState<string>("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className={"btn btn-primary btn-block me-2 mt-3"} onClick={handleShow}>
                Remove Account
            </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Close an New Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>WARNING: The account WILL be deleted, alongside transactions and goals.</Modal.Body>
            <div className={"px-3"}>
                <Dropdown className={""}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {value}
                    </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                props.bankAccountNames.map(p => <BankDropdown inputText={p} actionButton={setValue}/>)

                            }
                        </Dropdown.Menu>

                </Dropdown>
            </div>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {props.actionButton(value)}}>
                    Remove Account
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
