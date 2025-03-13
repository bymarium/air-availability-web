export interface Item {
  icon: string,
  text: string,
  alt: string,
}

export interface ClassCardData {
  type: string;
  description: string;
  price: string;
  conditions: Item[];
  others: Item[];
  colorHeader: string;
}
