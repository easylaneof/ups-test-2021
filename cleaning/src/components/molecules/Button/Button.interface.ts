import React from 'react';

type IconProps = any;

export type ButtonShape = 'default' | 'square';

export type ButtonContent = 'default' | 'icon' | 'text' | 'none';

type DefaultContent = {
  content?: 'default';
  children: React.ReactNode;
};

type IconContent = {
  content: 'icon';
  icon: IconProps;
};

type TextContent = {
  content: 'text';
  text: string;
};

type NoneContent = {
  content: 'none';
};

export type ButtonProps = (
  | DefaultContent
  | IconContent
  | TextContent
  | NoneContent
) & {
  onClick: React.MouseEventHandler;

  shape?: ButtonShape;

  className?: string;
};
