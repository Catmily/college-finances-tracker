import Container from "react-bootstrap/Container";
import {Money} from "./Money";
import React from "react";
import {Tab, Tabs} from "react-bootstrap";
import {IncomeOutgoingsMoney} from "./IncomeOutgoingsMoney";

export const Statements = () => {
    let accounts = ["Current Account", "Savings Account"];

    return (
        <Container>

        <div className={"mainContainer p-3 mt-3"}>
            <h1>Income Overview</h1>
        </div>
            <div className={"mainContainer p-3 mt-3"}>
            <Tabs
                defaultActiveKey={accounts[0]}
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                { accounts.map(p =>
                    <Tab eventKey={p} title={p}><IncomeOutgoingsMoney accountname={p} income={true}/></Tab>)
                }
            </Tabs>
        </div>
        </Container>

    )
}

