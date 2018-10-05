import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.scss';
import getMergedClassNames from '../../utils/getMergedClassNames';

const cx = classNames.bind(styles);

const FieldGroup = props => {
  const { className, children, inline, stretch } = props;

  const baseClass = 'field-group';
  const mergedClassNames = getMergedClassNames(
    cx({
      [baseClass]: true,
      [`${baseClass}--inline`]: inline,
      [`${baseClass}--stretched`]: stretch
    }),
    className
  );

  return <div className={mergedClassNames}>{children}</div>;
};

FieldGroup.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  stretch: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default FieldGroup;
