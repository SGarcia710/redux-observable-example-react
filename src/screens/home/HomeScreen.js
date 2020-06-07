import React, { useEffect, useCallback } from 'react';

export default ({ getCharacters }) => {
  useEffect(() => {
    getCharacters();
  });
  return <div>HOLA MUNDO</div>;
};
