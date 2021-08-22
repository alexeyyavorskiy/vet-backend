import { CreateOwnerDto } from '../../owners/dto/create-owner.dto';
import { CreateSpeciesDto } from '../../specieses/dto/create-species.dto';

export class CreatePetDto {
  readonly birthDay: string;
  readonly vaccinated: boolean;
  readonly species: CreateSpeciesDto;
  speciesId: number;
  readonly owner: CreateOwnerDto;
  ownerId: number;
}
