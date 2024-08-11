export interface FootageDetail {
  "AVAIL:MediaType":   string;
  "AVAIL:NASAID":      string;
  "AVAIL:Center":      string;
  "AVAIL:Description": string;
  "AVAIL:Keywords":    string[];
  "AVAIL:Title":       string;
  "AVAIL:DateCreated": string;
}

export interface MetadataFootage {
  location: string;
}
