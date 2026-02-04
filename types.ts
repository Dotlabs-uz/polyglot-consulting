
export interface University {
  id: number;
  name: string;
  rank?: string;
  advantages: string[];
  description?: string;
  fees?: string;
  pros?: string[];
}

export interface CountryData {
  id: string;
  name: string;
  flag: string;
  universities: University[];
  description: string;
}

export interface StudentApplication {
  fullName: string;
  phone: string;
  englishLevel: string;
  address: string;
}
