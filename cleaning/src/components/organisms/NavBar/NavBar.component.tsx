import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { cx } from '@emotion/css';

import { Text } from 'components/atoms/Text';
import { Icon, IconName, IconProps } from 'components/atoms/Icon';

import * as s from './NavBar.styles';

type NavBarLinkProps = {
  active: boolean;
  text: string;
  href: string;
  iconName: IconName;
};

const iconProps: { width: number } & Partial<IconProps> = {
  width: 20,
  viewBox: 21,
};

const NavBarLink = ({
  active,
  href,
  iconName,
  text,
}: NavBarLinkProps): JSX.Element => {
  const iconClassName = cx(s.link.icon, active && s.link.active);
  const textClassName = cx(s.link.text, active && s.link.active);

  return (
    <Link href={href}>
      <div className={s.link.container}>
        <Icon name={iconName} {...iconProps} className={iconClassName} />
        <Text text={text} className={textClassName} />
      </div>
    </Link>
  );
};

const links: Omit<NavBarLinkProps, 'active'>[] = [
  {
    text: 'Заказы',
    iconName: 'ic_bloom',
    href: '/orders',
  },
  {
    text: 'Клинеры',
    iconName: 'ic_cleaner',
    href: '/cleaners',
  },
  {
    text: 'Бонусы',
    iconName: 'ic_bonus',
    href: '/bonus',
  },
  {
    text: 'Помощь',
    iconName: 'ic_help',
    href: '/help',
  },
];

export const NavBar = (): JSX.Element => {
  const router = useRouter();

  return (
    <nav className={s.container}>
      <ul>
        {links.map((link) => (
          <NavBarLink
            active={router.pathname === link.href}
            {...link}
            key={link.href}
          />
        ))}
      </ul>
    </nav>
  );
};
