import { IAddress } from './address';
import { IAnimal } from './animal';

export interface IOwner {
  id?: string;
  fullName: string;
  address: IAddress;
  addressId?: string;
  animal?: IAnimal;
  animalId?: string;
}
