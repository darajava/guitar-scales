import React from 'react';

import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

const Header = (props) => {

  return (
    <div>
      <div styleName="header">
        <Link to={'/'}>
          Guitar Scales
        </Link>
      </div>
      <div styleName="space-header" />
    </div>
  )
}

export default CSSModules(Header, styles);
