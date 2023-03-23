import { Country } from './country';

export interface SBUser {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  dateOfBirth: Date;
  country: Country;
}
