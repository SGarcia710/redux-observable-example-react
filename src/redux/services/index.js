import { ajax } from 'rxjs/ajax';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export const getCharacers = () => ajax.getJSON(`${BASE_URL}/character`);
