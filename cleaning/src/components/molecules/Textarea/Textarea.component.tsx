import React from 'react';

import { cx } from '@emotion/css';

import { TextareaProps } from './Textarea.interface';

import * as s from './Textarea.styles';

export const Textarea = ({
  value,
  setValue,
  placeholder,
  className,
}: TextareaProps): JSX.Element => {
  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cx(s.container, className)}
    />
  );
};
