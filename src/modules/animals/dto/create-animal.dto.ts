import { Species } from '../../specieses/species.model';
import { Owner } from '../../owners/owners.model';

export class CreateAnimalDto {
  readonly id?: number;
  readonly birthDay: string;
  readonly vaccinated: boolean;
  readonly trackingId?: number;
  readonly species: Species;
  speciesId: number;
  readonly owner?: Owner;
  ownerId?: number;
}
