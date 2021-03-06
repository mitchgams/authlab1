import '../server/config/';
import config from '../server/config';

const globalDebug: boolean = config.debug.isOn;

interface IDebug {
    log: any;
    error: any;
}

export let debug: IDebug = {
    log: (body: string | number) => {
        if(globalDebug) console.log(body)
    }, 
    error: (body: string | number) => {
        if(globalDebug) console.error(body);
    }
};