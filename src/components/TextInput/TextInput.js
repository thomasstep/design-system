import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.scss';
import Input from '../Input';
import FieldLabel from '../FieldLabel';
import FieldError from '../FieldError';
import FieldDescription from '../FieldDescription';
import getMergedClassNames from '../../utils/getMergedClassNames';

const cx = classNames.bind(styles);

const TextInput = props => {
  const {
    inline,
    error,
    description,
    labelText,
    className,
    ...restProps
  } = props;

  const mergedClassNames = getMergedClassNames(
    cx({
      'text-input--inline': inline
    }),
    className
  );

  return (
    <div className={mergedClassNames}>
      <div
        className={cx({
          'text-input__label--inline': inline
        })}
      >
        <FieldLabel htmlFor={props.id}>{labelText}</FieldLabel>
      </div>
      <div>
        <Input {...restProps} error={error} />
        <FieldError>{error}</FieldError>
        <FieldDescription>{description}</FieldDescription>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  labelText: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  inline: PropTypes.bool,
  type: PropTypes.string,
  error: PropTypes.string,
  description: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;
