import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {flows, FlowsSymbol} from "./plugings/flow";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, {
    provide: FlowsSymbol,
    useFactory: async () => {
      const imports: any = await flows
      return imports.map((imported) => {
        const className = Object.keys(imported)[0]
        return new imported[className]()
      })
    }
  }],
})
export class AppModule {}
