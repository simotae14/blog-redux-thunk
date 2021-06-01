/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  // bad!
  state[0] = 'Sam';
  state.pop();
  state.push();

  // bad!
  state.name = 'Same';
  state.age = 30;
  
  return state;
};