import { ISpecies } from './species';

export interface IAnimal {
  id?: number;
  birthDay: string;
  species: ISpecies;
  speciesId?: number;
  vaccinated: boolean;
}
