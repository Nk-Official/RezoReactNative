import React from 'react';

const GetMoviesFromApi = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json.movies;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default GetMoviesFromApi;
