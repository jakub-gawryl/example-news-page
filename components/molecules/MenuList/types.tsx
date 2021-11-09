export namespace MenuList {
  export type Item = {
    caption: string;
    href: string;
    active?: boolean;
  };

  export type Items = Item[];
}