export interface Environment {
    [key: string]: string | boolean | undefined;
    production: boolean;
  }