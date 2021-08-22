import { Species } from '../../specieses/species.model';
import { Owner } from '../../owners/owners.model';

export class UpdatePetDto {
  readonly id: number;
  readonly birthDay: string;
  readonly vaccinated: boolean;
  readonly species: Species;
  speciesId: number;
  readonly owner: Owner;
  ownerId: number;
}
