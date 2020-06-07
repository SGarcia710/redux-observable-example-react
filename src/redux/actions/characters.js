import Types from '../types/characters';

export default {
  getCharacters: () => ({
    type: Types.GetCharacters,
  }),
  setCharacters: (characters) => ({
    type: Types.SetCharacters,
    characters,
  }),
};
