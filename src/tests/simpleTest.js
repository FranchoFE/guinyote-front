const GameService = require('../services/GameService')
const PlayerService = require('../services/PlayerService')
const WebSocketService = require('../services/WebSocketService')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function getUserInput (prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input)
    })
  })
}

function onNewTurnMessagesReceived (message) {
  console.log('onNewTurnMessagesReceived', message)
}

function onGameStatusMessagesReceived (message) {
  console.log('onGameStatusMessagesReceived', message)
}

async function selectGameToParticipate (gamesToParticipate) {
  let index = 1
  gamesToParticipate.forEach(game => {
    console.log('Game ', index, ': ', game.gameName)
    index = index + 1
  })
  console.log('0 -> Nuevo Juego')
  const gameSelectedIndex = await getUserInput('Seleccione el juego en el que quiere participar:')
  return gameSelectedIndex
}

async function main () {
  const name = await getUserInput('Ingrese su nombre: ')
  console.log('Hola, ' + name + '!')

  let newPlayer = await findPlayerByName(name)
  if (newPlayer == null) {
    console.log('El jugador', name, 'no existe. Se crea uno.')
    newPlayer = await createNewPlayer(name)
  }

  const gamesToParticipate = await getGamesToParticipate(name)
  console.log('Juegos en los que puede participar el usuario =', gamesToParticipate.length)

  await selectGameToParticipate(gamesToParticipate)
  rl.close()

  console.log('Listo')

  // const newGame = await foundNewGame(name)

  const wsService = new WebSocketService()
  wsService.connect()

  wsService.onNewTurnMessagesReceivedListener = onNewTurnMessagesReceived
  wsService.onGameStatusMessagesReceivedListener = onGameStatusMessagesReceived
}

async function findPlayerByName (name) {
  try {
    const player = await PlayerService.findPlayerByName(name)
    console.log('Player found: ', player)
    return player
  } catch (error) {
    console.error('Error findPlayerByName:', error)
  }

  return null
}

async function createNewPlayer (name) {
  try {
    const newPlayer = await PlayerService.createNewPlayer(name)
    console.log('New player created: ', newPlayer)
    return newPlayer
  } catch (error) {
    console.error('Error createNewPlayer:', error)
  }
}

async function createNewGame (totalGamesCreated) {
  console.log('create_new_game')
  try {
    const newGame = await GameService.createNewGame(totalGamesCreated)
    console.log('New game created: ', newGame)
    return newGame
  } catch (error) {
    console.error('Error create_new_game:', error)
  }
}

async function addPlayerToGame (game, player) {
  console.log('add_player_to_game', game, player)
  const playerToGame = await GameService.addPlayerToGame(game.gameId, player.playerId)
  console.log('playerToGame result =', playerToGame)
}

async function getGamesToParticipate (playerName) {
  const gamesToParticipate = []
  try {
    const allGames = await GameService.fetchGameList()
    allGames.forEach(game => {
      if (game.status === 'PENDING') {
        let gameToParticipate = false
        game.players.forEach(player => {
          if (player === playerName) {
            gameToParticipate = true
          }
        })

        if (gameToParticipate) {
          gamesToParticipate.push(gameToParticipate)
        }
      }
    })
  } catch (error) {
    console.error('Error buscando los juegos en los que participa actualmente el usuario')
  }
  return gamesToParticipate
}

async function foundNewGame (playerName) {
  console.log('Simple Test')
  let foundGame = null
  let totalGamesCreated = 0

  try {
    const result = await GameService.fetchGameList()
    totalGamesCreated = result.length
    console.log('Juegos devueltos: ', result)

    // Se recorren todos los juegos para ver si este jugador está en alguno que no ha terminado
    result.forEach(game => {
      console.log('- ' + game.name)
      if (game.status === 'PENDING') {
        let validGame = true
        game.players.forEach(player => {
          if (player === playerName) {
            validGame = false
          }
        })

        if (validGame) {
          console.log('Found game', game)
          foundGame = game
        }
      }
    })

    if (foundGame == null) {
      foundGame = await createNewGame(totalGamesCreated)
    }
  } catch (error) {
    console.error('Error print_all_games:', error)
  }

  console.log('bye')
  return foundGame
}

main()
