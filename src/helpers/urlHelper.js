// https://github.com/CodeCompleteYT/react-portfolio/blob/main/src/utils.js

export const getLocalURL = (path) => {
    return new URL(`/src/assets/${path}`, import.meta.url).href;
  };