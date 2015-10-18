export interface UserConfig {
  name: string;
  email: string;
  rating: number;
  javascript: boolean;
  ruby: boolean;
  php: boolean;
}

export class User {
  name: string;
  email: string;
  rating: number;
}