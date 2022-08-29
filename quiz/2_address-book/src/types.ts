interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export enum PhoneTypes {
  HOME = 'home',
  OFFICE = 'office',
  STUDIO = 'studio',
}
