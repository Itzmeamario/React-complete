import React from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

const person = ({name, age, click, changed, children}) => {

  return (
    <WithClass classes={classes.Person}>
      <p onClick={click}>I'm {name} and I am {age} years old!</p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </WithClass>
  );
};

export default person;