const initialState = {
  userNmae: 'Stuthi',
  location: 'California'
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {}

    default:
      return state
  }
}

export default user;
