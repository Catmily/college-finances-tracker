
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

import {useState} from "react";
import * as React from "react";

export type EventHandlerProps = {
    onClick: (e: React.MouseEvent) => void;
}

export type NormalProps = {
    actionButton: (person: string) => void;
    inputText: string;
}

export const InputWithButton = (props :  NormalProps) => {
    const [input, setInput] = useState<string>("");

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">{props.inputText}</InputGroup.Text>
            <FormControl
                placeholder={props.inputText}
                aria-label={props.inputText}
                aria-describedby="basic-addon1"
                onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setInput(event.target.value)}
            />
            <Button className={"addButton"} onClick={() => props.actionButton(input)}>Add {props.inputText}</Button>
        </InputGroup>
    )
}
