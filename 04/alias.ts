// Type alias
//
// O pipe (|) é chamado de Union
type Uid = number | string

function logDetails(uid: Uid, title: string) {
  console.log(`A product with ${uid} has a title as ${title}.`)
}

function logInfo(uid: Uid, usename: string) {
  console.log(`An user with ${uid} has a name as ${usename}.`)
}

logDetails(123, 'lorem')
logDetails('123', 'lorem')

logInfo(789, 'ipsum')
logInfo('789', 'ipsum')

type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlataform(platform: Platform) {
  return platform
}

renderPlataform('Linux')
