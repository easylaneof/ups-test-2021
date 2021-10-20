import React from 'react';

import { cx } from "@emotion/css";

import { TextInputProps } from './TextInput.interface';

import * as s from './TextInput.styles';

export const TextInput = ({
  setValue,
  value,
  placeholder,
  className,
}: TextInputProps): JSX.Element => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      className={cx(s.container, className)}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
