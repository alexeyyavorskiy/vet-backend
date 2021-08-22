import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ISpecies } from '../shared/models/interfaces/species';
import { Pet } from '../animals/pets.model';
import { Wild } from '../animals/wilds.model';

@Table({tableName: 'species'})
export class Species extends Model<Species, ISpecies> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  label: string;

  @BelongsTo(() => Pet)
  pet: Pet;

  @ForeignKey(() => Pet)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  petId: number;

  @BelongsTo(() => Wild)
  wild: Wild;

  @ForeignKey(() => Wild)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  wildId: number;

}
