import {Button, Col, Row, Tab} from "react-bootstrap";
import {Money} from "./Money";
import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import {Transaction} from "./Transaction";

export type Props = {
    accountname: string;
    income: boolean;
}

export const IncomeOutgoingsMoney = (props: Props) => {
    const [account, setAccount] = useState<string>(props.accountname);
    const [isIncome, setIsIncome] = useState<boolean>(props.income);

    return (
        <>
        <Money bankName={account} isStatement={false} bankAmount={0.00}/>
            <h2>Today</h2>
            <Transaction name={"Argos"} date={"23/12/2021"} description={"A simple transaction"} price={123.23} currency={"GBP"} cat={"Shopping"}/>
            <Transaction name={"Argos"} date={"23/12/2021"} description={"A simple transaction"} price={123.23} currency={"GBP"} cat={"Shopping"}/>
            <Transaction name={"Argos"} date={"23/12/2021"} description={"A simple transaction"} price={123.23} currency={"GBP"} cat={"Shopping"}/>

        </>
    )


}
