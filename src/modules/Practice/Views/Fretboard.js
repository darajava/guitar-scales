import React from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './styles.css';
import String from './String';
import Button from '../../../components/Button/Button';
import Wood from '../wood.jpg';

const Fretboard = (props) => {
  console.log('practiceprops, ', props);
  let practices = props.practices;
  let practiceItems = [];

  let tuning = ['e', 'a', 'd', 'g', 'b', 'e']; 

  let strings = [];
  for (let i = tuning.length - 1; i >= 0; i--) {
    strings.push(<String key={i} string={tuning[i]} keyy={props.keyy} scale={props.scale} number={i}/>);
  }


  return (
    <div styleName='fretboard-container'>
      <img styleName='fretboard' src={'https://static1.squarespace.com/static/5463f707e4b0eec8affdc959/t/54810d38e4b0ad44dee92e31/1417743673096/off-black.png?format=1500w'} />
    
      {strings}
    </div>
  )
};

export default CSSModules(Fretboard, styles);
