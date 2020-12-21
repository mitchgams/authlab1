import '../config/';
import config from '../config/';

const globalDebug: boolean = config.debug.isOn;

interface IDebug {
    log: any;
}

export let debug: IDebug = {log: null};

debug.log = (body: string | number) => {
    if(globalDebug) console.log(body);
}