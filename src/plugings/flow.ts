import * as fs from "fs";

export abstract class Flow {

    constructor(private command) { }

    execute(command: string, object: any) {
        if(command === this.command) {
            this.exec(object)
        }
    }

    protected abstract exec(object: any)
}


const files = fs.readdirSync('dist/plugings')
const plugings = Promise.all(files.filter(file => file.endsWith('.flow.js')).map(file => import('C:/Users/garoz/workspaces/20pivot/plugins-examples/dist/plugings/' + file)))

export const flows: Promise<Array<new () => Flow>> = plugings


export const FlowsSymbol = Symbol('Flows')