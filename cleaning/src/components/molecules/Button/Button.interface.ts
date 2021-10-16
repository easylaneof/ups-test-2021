import React from 'react';

type IconProps = any;

export type ButtonShape = 'general' | 'square';

export type ButtonContent = 'general' | 'icon' | 'text';

type GeneralContent = {
  content?: 'general';
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
  | GeneralContent
  | IconContent
  | TextContent
) & {
  onClick: React.MouseEventHandler;

  shape?: ButtonShape;

  className?: string;
};
