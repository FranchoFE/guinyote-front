// WebSocketService.js

// import store from '@/store' // Importa tu store de Vuex
const store = require('../store')

// import { Client } from '@stomp/stompjs'
const Stomp = require('@stomp/stompjs')
const WebSocket = require('ws')

const socketEndpoint = 'ws://localhost:8080/gs-guide-websocket' // Cambia la URL a la que corresponda

class WebSocketService {
  constructor () {
    console.log('WebSocketService constructor')

    const ws = new WebSocket('ws://localhost:8080/gs-guide-websocket')

    this.stompClient = new Stomp.Client({
      brokerURL: socketEndpoint,
      webSocketFactory: () => ws
    })

    this.stompClient.onConnect = (frame) => {
      this.setConnected(true)
      console.log('Connected.')

      this.stompClient.subscribe('/topic/card-to-player-messages', (cardToPlayer) => {
        this.showCardToPlayerMessagesReceived(JSON.parse(cardToPlayer.body))
      })

      this.stompClient.subscribe('/topic/new-turn-messages', (newTurnMessage) => {
        this.showNewTurnMessagesReceived(JSON.parse(newTurnMessage.body))
      })

      this.stompClient.subscribe('/topic/game-status-messages', (newGameStatusMessage) => {
        this.showGameStatusMessagesReceived(JSON.parse(newGameStatusMessage.body))
      })
    }

    this.stompClient.onWebSocketError = (error) => {
      console.error('Error with websocket', error)
    }

    this.stompClient.onStompError = (frame) => {
      console.error('Broker reported error: ' + frame.headers.message)
      console.error('Additional details: ' + frame.body)
    }

    this.onNewTurnMessagesReceivedListener = null
    this.onGameStatusMessagesReceivedListener = null

    console.log('WebSocketService constructor end', this.stompClient)
  }

  setConnected (connected) {
    console.log('Connected', connected)
  }

  showCardToPlayerMessagesReceived (message) {
    console.log('showCardToPlayerMessagesReceived', message)
  }

  showNewTurnMessagesReceived (message) {
    console.log('showNewTurnMessagesReceived', message, '. Listener', this.onNewTurnMessagesReceivedListener)
    if (this.onNewTurnMessagesReceivedListener != null) {
      this.onNewTurnMessagesReceivedListener(message)
    }

    // En el lugar donde recibes mensajes del WebSocket
    // store.commit('updateGameDetails', message)
  }

  showGameStatusMessagesReceived (message) {
    console.log('showGameStatusMessagesReceived', message, '. Listener', this.onGameStatusMessagesReceivedListener)
    if (this.onGameStatusMessagesReceivedListener != null) {
      this.onGameStatusMessagesReceivedListener(message)
    }
  }

  subscribe (routeToSubscribe) {
    console.log('subscribe', routeToSubscribe)
  }

  onConnect () {
    console.log('WebSocket connected')
    // this.sendName('pepe')
  }

  sendName (name) {
    console.log('sendName', name)
    this.stompClient.publish({
      destination: '/app/hello',
      body: JSON.stringify({ name })
    })
  }

  connect () {
    console.log('WebSocket trying to connect')
    this.stompClient.activate()
  }

  onStompError (error) {
    console.error('WebSocket error:', error)
  }

  sendMessage (destination, message) {
    console.error('sendMessage', message, 'to', destination)
  }
}

// export default new WebSocketService()
module.exports = WebSocketService
