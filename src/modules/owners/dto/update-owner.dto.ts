import { UpdateAddressDto } from '../../addresses/dto/update-address.dto';

export class UpdateOwnerDto {
  readonly id: number;
  readonly fullName: string;
  readonly address?: UpdateAddressDto;
  readonly addressId?: string;
}
