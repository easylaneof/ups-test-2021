import React from 'react';

import { mapTypeToUnit, typeToString } from 'lib/css';

import { IconName, icons, specialIcons } from './Icon.constants';
import { IconProps } from './Icon.interface';

export const Icon = ({
  width = 16,
  height = width,
  name,
  className,
  viewBox = 20,
  fill,
  stroke,
  translateX,
  translateY,
  translate,
  style,
}: IconProps): JSX.Element => {
  const _translateX = translateX ?? translate ?? 0;
  const _translateY = translateY ?? translate ?? 0;

  const horizontalViewBox = Array.isArray(viewBox) ? viewBox[0] : viewBox;
  const verticalViewBox = Array.isArray(viewBox) ? viewBox[1] : viewBox;

  const finalStyle: React.CSSProperties = {
    transform: `translate(${_translateX}${
      mapTypeToUnit[typeToString(_translateX)]
    }, ${_translateY}${mapTypeToUnit[typeToString(_translateY)]})`,
    ...style,
  };

  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      viewBox={`0 0 ${horizontalViewBox} ${verticalViewBox}`}
      className={className}
    >
      {name in icons
        ? renderPaths(name, finalStyle)
        : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          specialIcons[name]!({
            stroke,
            fill,
            ...finalStyle,
          })}
    </svg>
  );
};

const renderPaths = (iconName: IconName, style: React.CSSProperties) =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  icons[iconName]!.map((path) => {
    const evenOdd: React.SVGProps<SVGPathElement> = path.evenOdd
      ? {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
        }
      : {};

    return <path {...evenOdd} key={path.d} d={path.d} style={style} />;
  });
