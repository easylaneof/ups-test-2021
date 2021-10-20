import { Addon } from '../../types';

export type AddonView = 'default' | 'horizontal';

export type AddonProps = {
  addon: Addon;
  selected: boolean;
  setSelected(s: boolean): void;

  view?: AddonView;
  className?: string;
};
