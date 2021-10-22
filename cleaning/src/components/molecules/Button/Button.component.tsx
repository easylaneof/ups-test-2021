import React from 'react';

import { cx } from '@emotion/css';

import { Icon } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';

import { ButtonProps } from './Button.interface';

import * as s from './Button.styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const assertUnreachable = (_: never): never => {
  throw new Error('invalid combination of props');
};

export const Button = (props: ButtonProps): JSX.Element => {
  const { onClick, className, shape } = props;

  const finalClassName = cx(s.container, className, {
    [s.square]: shape === 'square',
  });

  const content = (() => {
    if (props.content === 'icon') {
      return <Icon {...props.icon} />;
    }

    if (props.content === 'text') {
      return <Text text={props.text} />;
    }

    if (props.content === 'none') {
      return null;
    }

    if (!props.content || props.content === 'default') {
      return props.children;
    }

    assertUnreachable(props.content);
  })();

  return (
    <button className={finalClassName} onClick={onClick} type='button'>
      {content}
    </button>
  );
};
