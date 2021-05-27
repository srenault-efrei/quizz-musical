## Events

- un user a été crée | la création d'un user a échoué

  - _event_ `userCreated`
  - _feature_ `createUser`

- une partie a été crée | la création d'une partie a échoué --> gameCreated

  - _event_ `gameCreated`
  - _feature_ `createGame`

- un joueur a rejoint la partie --> userJoined

  - _event_ `userJoined`
  - _feature_ `joinPrivateParty`
  - _feature 2_ `joinPublicParty`

- un joueur a été éliminé --> eliminate

  - _event_ `eliminate`
  - _feature_ `eliminateUser`

- une partie est terminée --> endGame

  - _event_ `endGame`
  - _feature_ `endGame`

- la réponse d'un joueur est envoyée au serveur | le résultat d'une réponse a été renvoyé par le serveur --> answer

  - _event_ `answer`
  - _feature_ `sendAnswer`

- commencer une partie --> start

  - _event_ `start`
  - _feature_ `startGame`

- un joueur a buzzé --> buzz
  - _event_ `buzz`
  - _feature_ `buzz`
