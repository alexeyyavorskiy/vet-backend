import { IAddress } from '../../shared/models/interfaces/address';

export class UpdateOwnerDto {
  readonly id: number;
  readonly fullName: string;
  readonly address?: IAddress;
  readonly addressId?: string;
}
