import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {getDisplay} from "./AuxillaryFunctions";
import {CashMoney} from "./CashMoney";

export type Props = {
    date: string,
    name: string,
    description: string,
    price: number,
    currency: string,
    cat: string
}

export const Transaction = (props: Props) => {
    const [transactionDate, setDate] = useState<string>(props.date);
    const [transactionName, setName] = useState<string>(props.name);
    const [transactionDescription, setDescription] = useState<string>(props.description);
    const [transactionPrice, setPrice] = useState<number>(props.price);
    const [transactionCurrency, setCurrency] = useState<string>(props.currency);
    const [transactionCategory, setCategory] = useState<string>(props.cat);
    const [brokenDown, setBrokenDown] = useState<number[]>([]);

    function setDisplay()
    {
        setBrokenDown(getDisplay(transactionPrice, transactionCurrency));
    }

    useEffect(() => {
        setDisplay();
    })

    return (
        <Container className= "p-0 m-0 p-3 mainContainer">
            <Row className="align-items-center">
                <Col  xs={1}>
                    <p>{transactionDate}</p>
                </Col>
                <Col xs={2}>
                    <p>{transactionCategory}</p>
                </Col>
                <Col xl={6}>
                    <p className="bold">{transactionName}</p>
                </Col>
                <Col className={"text-end "} xs={2}>
                    <h4>{transactionPrice} {props.currency}</h4>
                </Col>
                <Col className={"text-end "} xs={1}>
                    <Button className={"btn btn-primary btn-block btn-sm"}>Details</Button>

                </Col>
                <Row className="align-items-center">
                    <Col className={"pt-3 text-end"}>
                        {
                            brokenDown.map(p => (
                                <CashMoney brokenDown={p} currency={transactionCurrency}/>
                            ))
                        }
                    </Col>
                </Row>


            </Row>
        </Container>
    )
}
