import { connect } from 'react-redux';

import HomeScreen from './HomeScreen';
import CharactersActions from '../../redux/actions/characters';

const mapStateToProps = (state) => {
  return {
    characters: state.characters.gamesList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(CharactersActions.getCharacters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
