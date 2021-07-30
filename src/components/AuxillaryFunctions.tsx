import {currencies} from "./CurrencyTranslations";

export function getDisplay(money: number, currency: string)
{
    console.log(money);
    let keys = Object.keys(currencies[currency]).map(Number).sort((a,b) => b-a);

    let monet = [];
    console.log(keys);

    for (let i = 0; i<keys.length; i++)
    {
        if (money >= keys[i]) {
            while (money - keys[i] >= 0) {
                money = (money - keys[i]);

                monet.push(keys[i]);
            }
        };
    }
    // @ts-ignore
    return monet;
}
