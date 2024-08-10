export interface FootageResponse {
  collection: Collection;
}

export interface Collection {
  version: string;
  href:    string;
  items:   Item[];
}

export interface Item {
  href:  string;
  data:  Footage[];
  links: Link[];
}

export interface Footage {
  center:            string;
  date_created:      Date;
  description:       string;
  description_508:   string;
  keywords:          string[];
  media_type:        string;
  nasa_id:           string;
  photographer:      string;
  secondary_creator: string;
  title:             string;
}

export interface Link {
  href:    string;
  rel:     string;
  render?: string;
}
