import React from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Button from '../../../components/Button/Button';

const String = (props) => {
  console.log('practiceprops, ', props);
  let practices = props.practices;
  let practiceItems = [];

  let notes = ['a', 'as', 'b', 'c', 'cs', 'd', 'ds', 'e', 'f', 'fs', 'g', 'gs']; 
  let correctNotes = [false, false, false, false, false, false, false, false, false, false, false, false];

  let foundRoot = false;
  let i = 0, scaleNote = 0;

  let stringPos = 0, keyPos = 0;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i] === props.string) {
      stringPos += i;
    }
    if (notes[i] === props.keyy) {
      keyPos += i;
    }
  }

  // :)
  while (i < notes.length * 2) {
    if (foundRoot) {
      if (notes[i % notes.length] === props.keyy) {
        correctNotes[i % correctNotes.length] = 'root';
      } else {
        correctNotes[i % correctNotes.length] = true;        
      }

      i = i + props.scale[(scaleNote++) % props.scale.length];
    }
    if (notes[i] === props.keyy) {
      foundRoot = true;
    }

    if (!foundRoot) i++;
  }

  correctNotes = correctNotes.slice(stringPos, correctNotes.length).concat(correctNotes.slice(0, stringPos));
  correctNotes = correctNotes.concat(correctNotes).concat(correctNotes.slice(0, 9));


  console.log('correctNotes', props);
  console.log('correctNotes', props.string);
  console.log('correctNotes', notes);
  console.log('correctNotes', stringPos);
  console.log('correctNotes', correctNotes);


  let markers = [];
  for (let i = 0; i < correctNotes.length; i++) {
    if (correctNotes[i] === 'root') {
      markers.push(<div styleName='note-container'><div styleName='root' /></div>)
    } else if (correctNotes[i]) {
      markers.push(<div styleName='note-container'><div styleName='on' /></div>)
    } else {
      markers.push(<div styleName='note-container'><div styleName='off' /></div>);
    }
  }
  

  return (
    <div styleName='string-container'>
      <div styleName={'string' + props.number}>
      </div>
      {markers}
    </div>
  )
};

export default CSSModules(String, styles);
