type StateTypes = number | string

const useState = <S extends StateTypes = string>() => {
  let state: S

  const getState = () => {
    return state
  }

  const setState = (newState: S) => {
    state = newState
  }

  return {
    getState,
    setState
  }
}

const newState = useState()
newState.setState('456')

console.log(newState.getState())
