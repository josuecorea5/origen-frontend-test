export interface ImagesDetail {
  collection: Images;
}

export interface Images {
  version: string;
  href:    string;
  items:   Item[];
}

export interface Item {
  href: string;
}
