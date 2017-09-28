import React from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Button from '../../components/Button/Button';

const Scale = (props) => {
  console.log('scaleprops, ', props);
  let scales = props.scales;
  let scaleItems = [];

  for (let scale in scales) {
    if (
      scales.hasOwnProperty(scale)
      && (scales[scale].type === props.type)
    ) {
      if (!props.small) {
        scaleItems.push(
          <div onClick={ () => { props.onClick(scale) } } >
            <Button link={props.location.pathname + '/' + scale} label={scales[scale].text + '-' + scales[scale].pattern} />
          </div>
        );
      } else {
        scaleItems.push(
          <div onClick={ () => { props.onClick(scale) } } >
            <button>{scales[scale].text}</button>
          </div>
        );
      }
    }
  }

  return (
    <div >
    <div>Choose a {props.selectedExercise.text} in {props.selectedKey.text}</div>
      {scaleItems} 
    </div>
  )
};

export default CSSModules(Scale, styles) ;
