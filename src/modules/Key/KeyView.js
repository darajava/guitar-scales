import React from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Button from '../../components/Button/Button';

const Key = (props) => {
  console.log('keyprops, ', props);
  let keys = props.keys;
  let keyItems = [];


  for (let key in keys) {
    if (keys.hasOwnProperty(key)) {
      if (!props.small) {
        keyItems.push(
          <div onClick={() => { props.onClick(key) } }>
            <Button link={props.location.pathname + '/' + key} label={keys[key].text} />
          </div>
        );
      } else {
        keyItems.push(
          <div onClick={() => { props.onClick(key) } }>
            <button>{keys[key].text}</button>
          </div>
        );
      }
    }
  }

  return (
    <div>
    <div>Choose a {props.selectedExercise.text}</div>
      {keyItems}
    
    </div>
  )
};

export default CSSModules(Key, styles) ;
