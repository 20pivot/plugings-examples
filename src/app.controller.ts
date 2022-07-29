import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import {Flow, flows, FlowsSymbol} from "./plugings/flow";

@Controller()
export class AppController {
  constructor(@Inject(FlowsSymbol) private readonly flows: Flow[]) {}

  @Post()
  getHello(@Body() {command}) {
    this.flows.map(flow => flow.execute(command, {}))
  }
}
