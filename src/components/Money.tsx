import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import fs from 'fs';
import { currencies } from './CurrencyTranslations';
import { CashMoney } from "./CashMoney";
import {Button, Col, Row} from "react-bootstrap";
import {InputWithButton} from "./InputWithButton";
import {getDisplay} from "./AuxillaryFunctions";

export type Props = {
    bankName: string;
    bankAmount: number;
}


export const Money = (props : Props) => {
    const [moneyName, setMoneyName] = useState<string>();
    const [amount, setAmount] = useState<number>(props.bankAmount);
    const [brokenDown, setBrokenDown] = useState<number[]>([]);
    const [currency, setCurrency] = useState<string>("GBP");

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
                    <InputWithButton actionButton={setDisplay} inputText={props.bankName}/>

                    <Col xs={3}>
                        <h2>{props.bankName}</h2>
                        <h4>{amount} {currency}</h4>
                    </Col>
                    <Col className={"pt-3 text-end"}>
                        {
                            brokenDown.map(p => (
                                <CashMoney brokenDown={p} currency={currency}/>
                            ))
                        }
                    </Col>


                </Row>



        </Container>
        </>
    )
}
