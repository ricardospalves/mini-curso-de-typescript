interface Game {
  title: string;
  description: string;
  readonly genre: string;
  plataform?: string[];
  getSimilars?: (title: string) => void;
}

const theLastOfUs: Game = {
  title: 'The Last Of Us',
  description: 'The best game in the world',
  genre: 'Action',
  plataform: ['PS3', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
  }
}

console.log(theLastOfUs.title)
console.log(theLastOfUs.genre)

if(theLastOfUs.getSimilars) {
  theLastOfUs.getSimilars(theLastOfUs.title)
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftBehind: DLC = {
  title: 'The Last Of Us',
  description: 'You play as Ellie before the original game',
  genre: 'Action',
  originalGame: theLastOfUs,
  newContent: [
    '3 hours story',
    'new characters'
  ]
}

// =============================================================================

class CreateGame implements Game {
  title: string
  description: string
  genre: string

  constructor(title: string, description: string, genre: string) {
    this.title = title
    this.description = description
    this.genre = genre
  }
}

const createGame = new CreateGame('GTA', '', 'Action')

console.log(createGame)
