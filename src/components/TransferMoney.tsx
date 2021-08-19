import {Button, Container, Dropdown} from "react-bootstrap"
import {Money} from "./Money";
import React, {useState} from "react";
import {InputWithButton} from "./InputWithButton";
import {Input} from "./Input";
import {CashMoney} from "./CashMoney";
import {BankDropdown} from "./BankDropdown";


export const TransferMoney = () => {
    const [accounts, setAccounts] = useState<string[]>(["Current Account", "Savings Account"]);
    const [account1, setAccount1] = useState<string>("");
    const [account2, setAccount2] = useState<string>("");
    const [brokenDown1, setBrokenDown1] = useState<number[]>([]);
    const [brokenDown2, setBrokenDown2] = useState<number[]>([]);


    return (
        <Container>
        <div className={"mainContainer p-3 mt-3"}>
            <h1>Transfer Money between Accounts</h1>
            <p>Please select two accounts and the amounts to continue.</p>

                <>
                    <Dropdown className={"mt-4"}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            From: {account1}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                accounts.map(p => <BankDropdown inputText={p} actionButton={setAccount1}/>)
                            }
                        </Dropdown.Menu>

                    </Dropdown>
                    {
                        account1 ? <Money bankName={account1}  bankAmount={54.34}/> : ""
                    }
                    {
                        account1 ?
                            <Input inputText={"Amount from"}/> : ""
                    }
                    <Dropdown className={"mt-4"}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            To: {account2}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                accounts.map(p => <BankDropdown inputText={p} actionButton={setAccount2}/>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    {
                        account2 ?  <Money bankName={account2} bankAmount={54.34}/> : ""
                    }

                    {
                        account2 ?   <Input inputText={"Amount to"}/> : ""
                    }
                    <Button className={"btn btn-primary btn-block mt-3"}>Transfer Money</Button>


                </>
        </div>
        </Container>
    )
}
