import { IAddress } from '../../shared/models/interfaces/address';

export class CreateOwnerDto {
  readonly fullName: string;
  readonly address: IAddress;
}
