import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import fs from 'fs';
import { currencies } from './CurrencyTranslations';
import { CashMoney } from "./CashMoney";
import {Button, Col, Row} from "react-bootstrap";
import {Input} from "./Input";
import {getDisplay} from "./AuxillaryFunctions";

export type Props = {
    bankName: string;
    isStatement: boolean;
    bankAmount: number;
}


export const Money = (props : Props) => {
    const [moneyName, setMoneyName] = useState<string>();
    const [amount, setAmount] = useState<number>(props.bankAmount);
    const [brokenDown, setBrokenDown] = useState<number[]>([]);
    const [currency, setCurrency] = useState<string>("GBP");
    const [isStatement, setIsStatement] = useState<boolean>(props.isStatement);

    let availableCurrency = {};

    function setDisplay(amount: string)
    {
        setAmount(parseFloat(amount));
        setBrokenDown(getDisplay(parseFloat(amount), currency));
    }

    return (
        <>
        <Container className= "p-0 m-0 p-3 mt-2 mb-4 mainContainer">
                <Row>
                    <Input actionButton={setDisplay} inputText={props.bankName}/>

                    <Col>
                        <h2>{props.bankName}</h2>
                        <h4>{amount} {currency}</h4>
                    </Col>
                    <Col>
                        <div className={"d-grid gap-2 "}>
                            <Button className={"btn btn-primary btn-block"}>Transfer Money</Button>
                            <Button className={"btn btn-primary btn-block"}>Record a Transaction</Button>

                            {isStatement &&

                                    <Button className={"btn btn-primary btn-block"}>View your Statement</Button>

                            }

                        </div>
                    </Col>


                </Row>

                <Col className={"pt-3"}>
                    {
                        brokenDown.map(p => (
                            <CashMoney brokenDown={p} currency={currency}/>
                        ))
                    }
                </Col>

        </Container>
        </>
    )
}
