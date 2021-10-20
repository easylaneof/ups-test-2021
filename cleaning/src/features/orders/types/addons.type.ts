export type AddonCategory = 'kitchen' | 'bathroom' | 'pets' | 'extra';

export type Addon = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  duration: number;
  category: AddonCategory;
};

export type EnhancedAddon = Addon & {
  selected: boolean;
};
