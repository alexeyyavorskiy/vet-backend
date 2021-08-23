import { IAddress } from './address';
import { IAnimal } from './animal';

export interface IOwner {
  id?: number;
  fullName: string;
  address?: IAddress;
  addressId?: string;
  animal?: IAnimal;
  animalId?: number;
}
