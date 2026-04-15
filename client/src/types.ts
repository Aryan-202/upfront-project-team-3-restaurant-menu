export interface MenuItemType {
  id: string;
  name: string;
  desc: string;
  price: number | string;
  img: string;
}

export interface MenuSectionProps {
  title: string;
  icon: string | React.ReactNode;
  items: MenuItemType[];
  bg: string;
}

export interface MenuCardProps {
  item: MenuItemType;
}
