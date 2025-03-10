import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


//WEBSOCKET SET UP
// CREATE NEST PROJECT 
// INSTALL PACKAGES OF WEBSOCKET --> npm install @nestjs/websockets@10 @nestjs/platform-socket.io@10
// NOW GENERATE GATEWAY CHAT BY --> USING nest generate gateway chat
// SET CODE IN CHAT.GATEWAY.TS 
//NOW INSTALL npm install socket.io-client
// NOW CREATE INDEX.HTML AND SET UP A CODE HERE
// NOW CHECK

