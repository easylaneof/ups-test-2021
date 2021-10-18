import React, { useState } from 'react';

import { Text } from 'components/atoms/Text';

import { TabsProps } from './Tabs.interface';

import * as s from './Tabs.styles';
import { cx } from '@emotion/css';

export const Tabs = ({
  leftChild,
  rightChild,
  rightTitle,
  leftTitle,
}: TabsProps): JSX.Element => {
  const [isLeft, setIsLeft] = useState(true);

  return (
    <div className={s.container}>
      <div className={s.top}>
        <button
          onClick={() => setIsLeft(true)}
          className={s.tabItem}
          type='button'
        >
          <Text
            text={leftTitle}
            className={cx(s.tabItemText, isLeft && s.active)}
          />
        </button>

        <button
          onClick={() => setIsLeft(false)}
          className={s.tabItem}
          type='button'
        >
          <Text
            text={rightTitle}
            className={cx(s.tabItemText, !isLeft && s.active)}
          />
        </button>
      </div>

      <div className={s.content}>{isLeft ? leftChild : rightChild}</div>
    </div>
  );
};
