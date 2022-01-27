type AccountInfo = {
  id: number;
  name: string;
  email?: string; // optional
}

const account: AccountInfo = {
  id: 123,
  name: 'Lorem',
}

type CharacterInfo = {
  nickname: string;
  level: number;
}

const character: CharacterInfo = {
  nickname: 'lorem',
  level: 100,
}

// O e comercial (&) é chamado Intersection
type PlayerInfo = AccountInfo & CharacterInfo

const player: PlayerInfo = {
  id: 123,
  name: 'Lorem',
  nickname: 'lorem',
  level: 3,
}
