import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactCtas.module.css';

const Item = ({ isEmail }) => (
  <a
    className={styles.item}
    href={
      isEmail ? 'mailto:info@citychiropractor.com.au' : 'tel:+612-9221-0771'
    }
  >
    {isEmail ? 'Email us' : 'Call us'}
  </a>
);

Item.propTypes = {
  isEmail: PropTypes.bool,
};

Item.defaultProps = {
  isEmail: false,
};

const ContactCtas = ({ isAlternateStyle }) => (
  <div className={{ isAlternateStyle }}>
    <Item />
    <Item isEmail />
  </div>
);

ContactCtas.propTypes = {
  isAlternateStyle: PropTypes.bool,
};

ContactCtas.defaultProps = {
  isAlternateStyle: false,
};

export default ContactCtas;
