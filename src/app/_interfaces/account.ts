export interface Account {
  id: number;
  iban: string;
  accountType: AccountType;
  currentBalance: number;
  maxDispo: number;
}

export enum AccountType {
  Tagesgeld = 'TAGESGELD',
  Girokonto = 'GIRO',
  Festgeld = 'DEPOT',
}
