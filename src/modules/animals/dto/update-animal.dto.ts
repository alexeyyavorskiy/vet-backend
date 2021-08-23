import { Species } from '../../specieses/species.model';
import { Owner } from '../../owners/owners.model';
import { UpdateSpeciesDto } from '../../specieses/dto/update-species.dto';
import { UpdateOwnerDto } from '../../owners/dto/update-owner.dto';

export class UpdateAnimalDto {
  readonly birthDay: string;
  readonly vaccinated: boolean;
  readonly trackingId?: number;
  readonly species: UpdateSpeciesDto;
  speciesId: number;
  readonly owner?: UpdateOwnerDto;
  ownerId?: number;
}
