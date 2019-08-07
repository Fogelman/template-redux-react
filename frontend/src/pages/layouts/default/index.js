import React from 'react';
import { Wrapper } from './styles.js';

import PropTypes from 'prop-types';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
