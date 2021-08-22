import { CreateAddressDto } from '../../addresses/dto/create-address.dto';

export class CreateOwnerDto {
  readonly fullName: string;
  readonly address?: CreateAddressDto;
}
