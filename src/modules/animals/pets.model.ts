import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Species } from '../specieses/species.model';
import { Owner } from '../owners/owners.model';
import { ISpecies } from '../shared/models/interfaces/species';
import { IPet } from '../shared/models/interfaces/pet';
import { IOwner } from '../shared/models/interfaces/owner';

@Table({ tableName: 'animals' })
export class Pet extends Model<Pet, IPet> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING})
  birthDay: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  vaccinated: boolean;

  @HasOne(() => Species)
  species: ISpecies;

  @BelongsTo(() => Owner)
  owner: IOwner;

  @ForeignKey(() => Owner)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  ownerId: number;

}
