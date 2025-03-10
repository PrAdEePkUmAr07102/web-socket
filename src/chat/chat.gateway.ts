import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true }) // Enable CORS for WebSockets
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  // When a user connects
  handleConnection(client: Socket) {
    console.log(`User connected: ${client.id}`);
    this.server.emit('user-connected', `User ${client.id} has joined the chat`);
  }

  // When a user disconnects
  handleDisconnect(client: Socket) {
    console.log(`User disconnected: ${client.id}`);
    this.server.emit(
      'user-disconnected',
      `User ${client.id} has left the chat`,
    );
  }

  // Handling message event
  @SubscribeMessage('send-message')
  handleMessage(client: Socket, message: string) {
    console.log(`Message from ${client.id}: ${message}`);
    this.server.emit('receive-message', { id: client.id, text: message });
  }
}
