import { CreateOwnerDto } from '../../owners/dto/create-owner.dto';
import { CreateSpeciesDto } from '../../specieses/dto/create-species.dto';

export class CreateAnimalDto {
  readonly id?: number;
  readonly birthDay: string;
  readonly vaccinated: boolean;
  readonly trackingId?: number;
  readonly species: CreateSpeciesDto;
  speciesId: number;
  readonly owner?: CreateOwnerDto;
  ownerId?: number;
}
