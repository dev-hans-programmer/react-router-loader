export interface IMenuItem {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

export type MenuList = IMenuItem[]