import { EnhancedAddon } from '../../types';

export type AddonsSectionProps = {
  title: string;
  addons: EnhancedAddon[];
  setSelected(addonId: string): (selected: boolean) => void;

  className?: string;
};
