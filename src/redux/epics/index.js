import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';

import charactersEpic from './characters';

export default (action$, store$, dependencies) =>
  combineEpics(charactersEpic)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

// export default combineEpics(charactersEpic);
