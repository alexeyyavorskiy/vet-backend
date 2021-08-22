import { CreateAddressDto } from './create-address.dto';

export class CreateOwnerDto {
  readonly fullName: string;
  readonly address?: CreateAddressDto;
}
