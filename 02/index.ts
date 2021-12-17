(function() {
  'use strict'

  const input1 = document.querySelector('#number1') as HTMLInputElement
  const input2 = document.querySelector('#number2') as HTMLInputElement
  const button = document.querySelector('button') as HTMLButtonElement
  const sum = (a: number, b: number) => {
    return a + b
  }

  button.addEventListener('click', () => {
    const number1 = Number(input1.value)
    const number2 = Number(input2.value)

    console.log(sum(number1, number2))
  })
})()
