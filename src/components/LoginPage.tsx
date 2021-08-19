import React from "react";
import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {Input} from "./Input";

export type Props = {
    REGISTER : boolean;
}

export const LoginPage = (props: Props) => {
    return (
        <Container>
            <>

            <div>
                <Row>

                    {!props.REGISTER &&
                    <Col xs lg="5" className={"mainContainer p-3 mt-3 text-center my-auto mx-auto"}>
                        <h1>Login to Qamarium</h1>
                        <p>Sign in to Qamarium to sort out your budget today!</p>
                        <Input inputText={"Login"}/>
                        <Input inputText={"Password"}/>
                        <Button className={"btn btn-primary btn-block me-2"}>Login</Button>
                        <Button className={"btn btn-primary btn-block"}>Register Today! </Button>

                    </Col>
                    }
                    {props.REGISTER &&
                    <Col xs lg="5" className={"mainContainer p-3 mt-3 text-center my-auto mx-auto"}>
                        <h1>Register for Qamarium</h1>
                        <p>Register to Qamarium to sort out your budget today!</p>
                        <Input inputText={"Login"}/>
                        <Input inputText={"Password"}/>
                        <Input inputText={"Email"}/>

                        <Button className={"btn btn-primary btn-block"}>Register</Button>
                    </Col>
                    }
                </Row>
            </div>
                        </>
        </Container>

    )
}
