import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable WebSocket adapter
  app.useWebSocketAdapter(new IoAdapter(app));

  // Allow CORS (important for external clients)
  app.enableCors();

  // Start server on PORT (Render provides the PORT via process.env.PORT)
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server running on port ${port}`);
}

bootstrap();

//WEBSOCKET SET UP
// CREATE NEST PROJECT
// INSTALL PACKAGES OF WEBSOCKET --> npm install @nestjs/websockets@10 @nestjs/platform-socket.io@10
// NOW GENERATE GATEWAY CHAT BY --> USING nest generate gateway chat
// SET CODE IN CHAT.GATEWAY.TS
//NOW INSTALL npm install socket.io-client
// NOW CREATE INDEX.HTML AND SET UP A CODE HERE
// NOW CHECK git add .
//git add .
//git commit -m "Fixed WebSocket deployment for Render"
//git push origin main
