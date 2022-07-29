import {Flow} from "./flow";

export class AddWordFlow extends Flow {

    constructor() {
        super('add word');
    }

    exec(object: any) {
        console.log('adding word')
    }
}