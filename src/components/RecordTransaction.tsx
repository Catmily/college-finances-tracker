import Container from "react-bootstrap/Container";
import React, {useState} from "react";
import {Button, Col, Dropdown, FormControl, InputGroup, Row} from "react-bootstrap";
import {BankDropdown} from "./BankDropdown";
import {Money} from "./Money";
import {Input} from "./Input";

export const RecordTransaction = () => {
    const [accounts, setAccounts] = useState<string[]>(["Current Account", "Savings Account"]);
    const [account, setAccount] = useState<string>("");

    function showFields() {
        return (
            <>
        <Row>
            <Col>
                {
                        <Input inputText={"Organisation or Company"}/>
                }
            </Col>
            <Col>
                {

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Transaction Category
                            </InputGroup.Text>

                            <Dropdown >
                                <Dropdown.Toggle  id="dropdown-basic" className={"btn-block w-100"}>
                                    Category
                                </Dropdown.Toggle>

                                <Dropdown.Menu>

                                </Dropdown.Menu>

                            </Dropdown>
                        </InputGroup>

                }
            </Col>
        </Row>
        <Row>
            <Col>
                        <Input inputText={"Date of Transaction"}/>

            </Col>
            <Col>
                <Input inputText={"Transaction Amount"}/>

            </Col>

        </Row>
                <Row>
                    <Col>
                        <Input inputText={"Transaction Description"}/>

                    </Col>
                    <Col>
                        <Button className={"btn btn-primary btn-block w-100"}>Upload Receipt</Button>

                    </Col>

                </Row>

                <Button className={"btn btn-primary mt-3"}>Add Transaction</Button></>)
    }

    return (

        <Container>
            <div className={"mainContainer p-3 mt-3"}>
                <h1>Record Transaction</h1>
                <Dropdown className={"mt-4"}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Account: {account}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            accounts.map(p => <BankDropdown inputText={p} actionButton={setAccount}/>)
                        }
                    </Dropdown.Menu>

                </Dropdown>
                {
                    account ?

                        <Money bankName={account}  bankAmount={54.34}/>

                        : ""
                }

                {
                    account ? showFields() : ""
                }

            </div>
        </Container>
    )
}
