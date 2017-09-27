import React from 'react';
import {Link} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const Button = (props) => {
  console.log(props);
  return (
    <div styleName="profile-card">
      <Link to={props.link}>
        {props.label}
      </Link>
    </div>
  )
}

export default CSSModules(Button, styles);
