import {Money} from "./Money";
import Container from "react-bootstrap/Container";
import {InputWithButton} from "./InputWithButton";
import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {ButtonToolbar, Col, Row} from "react-bootstrap";
import {CartesianGrid, Line, Tooltip, XAxis, LineChart, ResponsiveContainer} from "recharts";
import {AddAccountButton} from "./AddAccountButton";
import {CloseAccountButton} from "./CloseAccountButton";

export const BankAccount = () => {
    const [accounts, setAccounts] = useState<string[]>([]);


    function addAccounts (account : string) {
        setAccounts([...accounts, account]);
    }

    function removeAccount (account : string) {
        for (let i=0; i<accounts.length; i++)
        {
            if (accounts[i] == account)
            {
                accounts.splice(i, 1);
            }
        }
        setAccounts([...accounts]);
    }

    return (

        <Container>
            <>
            <div className={"mainContainer p-3 mt-3"}>
                <h1>Welcome, Qamar!</h1>
                <p>Thank you for choosing Qamarium Budgeting as your software of choice.</p>
            </div>

            <div className={"mainContainer p-3 mt-3"}>
            <h3>Finances over the last period:</h3>
                <Row>
                    <Col>
                        <ResponsiveContainer width="95%" height={200}>
                            <LineChart
                                width={300}
                                height={300}
                                data={[
                                    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
                                    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
                                    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
                                    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
                                    { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
                                    { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
                                    { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
                                    { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
                                    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
                                    { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
                                ]}
                                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                            >

                                <XAxis dataKey="name" />
                                <Tooltip />
                                <CartesianGrid stroke="#f5f5f5" />
                                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Col>
                </Row>
            </div>
                {
                    accounts.map(p => (<Money bankName={p} bankAmount={54.34}/> ))
                }


                  <AddAccountButton addAccounts={addAccounts}/>

            {accounts.length ?
                    <CloseAccountButton bankAccountNames={accounts} actionButton={removeAccount}/> : ""}
                </>
        </Container>


    )
}
