import { Species } from '../../specieses/species.model';

export class CreateWildsDto {
  readonly id: number;
  readonly birthDay: string;
  readonly vaccinated: boolean;
  readonly trackingId: number;
  readonly species: Species;
  speciesId: number;
}
