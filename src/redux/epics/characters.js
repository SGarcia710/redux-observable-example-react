import { combineEpics, ofType } from 'redux-observable';
import { flatMap, map } from 'rxjs/operators';

import Types from '../types/characters';
import Actions from '../actions/characters';
import * as Services from '../services';

const getCharactersEpic = (action$) => {
  return action$.pipe(
    ofType(Types.GetCharacters),
    flatMap(() => Services.getCharacers()),
    map(({ results }) => Actions.setCharacters(results))
  );
};

export default combineEpics(getCharactersEpic);
