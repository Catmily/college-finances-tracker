import {useState} from "react";
import { currencies } from './CurrencyTranslations';
import {useDrag} from "react-dnd";

export type ImageProps = {
    brokenDown: number;
    currency: string
}
export const CashMoney = (props: ImageProps) =>
{
    const [amount, setAmount] = useState<number>(props.brokenDown);
    // const [imageLocation, setImageLocation] = useState<string>(props.src);

    return (
        <img src={window.location.origin + "/" + currencies[props.currency][props.brokenDown]} width="50px"/>
    )
}
