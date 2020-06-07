import Types from '../types/characters';

const INITIAL_STATE = {
  characters: [],
};

// Handlers
const getCharacters = (state, action) => ({
  ...INITIAL_STATE,
});

const setCharacters = (state, { characters }) => {
  console.log(characters);
  return { ...state, characters };
};

// Binding actions to handlers
const reducerMap = {
  [Types.GetCharacters]: getCharacters,
  [Types.SetCharacters]: setCharacters,
};

// Reducer
export default (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type];
  return typeof handler === 'function' ? handler(state, action) : state;
};
