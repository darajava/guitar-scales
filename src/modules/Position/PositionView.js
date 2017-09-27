import React from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Button from '../../components/Button/Button';

const Position = (props) => {
  console.log('positionprops, ', props);
  let positions = props.positions;
  let positionItems = [];

  for (let position in positions) {
    if (positions.hasOwnProperty(position)) {
      
      positionItems.push(
        <div key={position} onClick={() => { props.onClick(position) }}>
          <Button link={props.location.pathname + '/' + position} label={positions[position].text} />
        </div>
      );
    }
  }

  return (
    <div>
      <div>Choose an position</div>
      {positionItems}
    </div>
  )
};

export default CSSModules(Position, styles);
