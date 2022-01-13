// boolean (true/false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo`

// number (int, float, hex, binary)
let total: number
total = 20.3

let hex: number
hex = 0xff0

// array (type[] or Array<type>)
let numbers: number[]
numbers = [1, 2, 3]

let floats: Array<number> // generic
floats = [1.0, 2.0, 3.0]

// tuple ([type [, ...type]])
let title: [string, number, boolean]
title = ['lorem', 1, true]

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// void (vazio)
// Serve para tipar funções sem retorno explícito.
function logger(): void {
  console.log('foo')
}

// null | undefined
type Bla = string | undefined

// never
// Serve para tipar funções que nunca irão retornar. No exemplo abaixo, a função
// está disparando uma exceção, e não um retorno explício.
function error(): never {
  throw new Error('error')
}

// object
let cart: object

cart = {
  key: 'foo'
}

// any (qualquer coisa - EVITAR ESTE TIPO!!!)
let thing: any
thing = true
thing = 'a'
thing = 1
