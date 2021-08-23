import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { Species } from '../specieses/species.model';
import { ISpecies } from '../shared/models/interfaces/species';
import { IWildAnimal } from '../shared/models/interfaces/wild-animal';

@Table({ tableName: 'animals' })
export class Wild extends Model<Wild, IWildAnimal> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING})
  birthDay: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  vaccinated: boolean;

  @Column({ type: DataType.INTEGER, allowNull: false })
  trackingId: number;

  @HasOne(() => Species)
  species: ISpecies;

}
