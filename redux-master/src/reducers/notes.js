const initialState = {
  note: 'I love React and Redux!'
};

const notes = (state = initialState, action) => {
  switch ('action.type') {
    case 'WRITE_NOTE':
      return {}

    default:
    return state;
  }
}

export default notes;
