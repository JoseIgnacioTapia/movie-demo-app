import React from 'react';

import classes from './Movie.module.css';

const Movie = props => {
  const deleteHandler = async () => {
    try {
      const response = await fetch(
        `https://fir-movie-app-2761f-default-rtdb.firebaseio.com/movies.json/${props.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
              'Origin, X-Requested-With, Content-Type, Accept',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong ' + response.status);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteHandler}>X</button>
    </li>
  );
};

export default Movie;
