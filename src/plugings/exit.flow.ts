import {Flow} from "./flow";

export class ExitFlow extends Flow {

    constructor() {
        super('exit');
    }

    exec(object: any) {
        console.log('exiting')
    }
}