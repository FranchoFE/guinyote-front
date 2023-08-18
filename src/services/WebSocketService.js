import { Client } from '@stomp/stompjs';

const socketEndpoint = 'ws://localhost:8080/gs-guide-websocket'; // Cambia la URL a la que corresponda

class WebSocketService {
  constructor() {
    console.log("WebSocketService constructor")

    this.stompClient = new Client({
      brokerURL: socketEndpoint
    });

    this.stompClient.onConnect = (frame) => {
      this.setConnected(true);
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/greetings', (greeting) => {
        this.showGreeting(JSON.parse(greeting.body).content);
      });

    };

    this.stompClient.onWebSocketError = (error) => {
      console.error('Error with websocket', error);
    };

    this.stompClient.onStompError = (frame) => {
      console.error('Broker reported error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    };

    this.stompClient.activate();

    console.log("WebSocketService constructor end", this.stompClient)
  }

  setConnected(connected) {
    console.log("Connected", connected)
  }

  showGreeting(message) {
    console.log("showGreeting", message)
  }

  onConnect() {
    console.log('WebSocket connected');
  }

  onStompError(error) {
    console.error('WebSocket error:', error);
  }

  sendMessage(destination, message) {
    console.error('sendMessage', message, 'to', destination);
  }
}

export default new WebSocketService();
