// Abstract classes
//
// Classes abstratas não permitem que objetos sejam criadas a partir delas, elas
// precisam serem extendidas por outras classes.
abstract class UserAccount {
  // Modifier public
  public name: string

  // # Modifier protected
  //
  // * Só pode ser chamada usada dentro da classe e das classes que a extendem
  // * Não pode ser usada fora da classe
  protected age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharacterAccount extends UserAccount {
  // # Modifier private
  //
  // * Só pode ser chamada usada dentro da classe
  // * Não pode ser usada em classes que a extendem e nem fora da classe
  private nickname: string

  // # Modifier readonly
  readonly createData: Date

  level: number

  constructor(name: string, age: number, nickname: string, level: number, createData: Date) {
    super(name, age)

    this.nickname = nickname
    this.level = level
    this.createData = createData
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} has the char ${this.nickname} at level ${this.level}`)
  }
}

const ipsum = new CharacterAccount('Ipsum', 30, 'ipsum', 87, new Date())
console.log(ipsum)
console.log(ipsum.level)
console.log(ipsum.name)
console.log(ipsum.createData)
ipsum.logDetails()
