import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ISpecies } from '../shared/models/interfaces/species';
import { Animal } from '../animals/animals.model';

@Table({tableName: 'species'})
export class Species extends Model<Species, ISpecies> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  label: string;

  @BelongsTo(() => Animal)
  animal: Animal;

  @ForeignKey(() => Animal)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  animalId: number;

}
