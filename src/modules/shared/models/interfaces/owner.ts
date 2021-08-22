import { IAddress } from './address';
import { IPet } from './pet';

export interface IOwner {
  id?: number;
  fullName: string;
  address?: IAddress;
  addressId?: string;
  pet?: IPet;
  petId?: number;
}
