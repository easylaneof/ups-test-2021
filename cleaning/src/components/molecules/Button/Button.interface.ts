import React from 'react';

type IconProps = any;

export type ButtonShape = 'default' | 'square';

export type ButtonContent = 'default' | 'icon' | 'text';

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

export type ButtonProps = (
  | DefaultContent
  | IconContent
  | TextContent
) & {
  onClick: React.MouseEventHandler;

  shape?: ButtonShape;

  className?: string;
};
