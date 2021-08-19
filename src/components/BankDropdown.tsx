import {useState} from "react";
import {Dropdown, FormControl, InputGroup} from "react-bootstrap";
import * as React from "react";


export type NormalProps = {
    inputText: string;
    actionButton: (bank: string) => void;
}

export const BankDropdown = (props :  NormalProps) => {
    const [value, setValue] = useState<string>("");

    return (
        <Dropdown.Item
            onClick={() => props.actionButton(props.inputText)}>{props.inputText}
        </Dropdown.Item>
    )
}
