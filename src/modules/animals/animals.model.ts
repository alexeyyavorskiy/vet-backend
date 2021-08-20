import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { IAnimal } from '../shared/models/interfaces/animal';
import { Species } from './species.model';
import { Owner } from '../owners/owners.model';
import { IPet } from '../shared/models/interfaces/pet';

@Table({ tableName: 'animals' })
export class Animal extends Model<Animal, IAnimal | IPet> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  birthDay: Date;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  vaccinated: boolean;

  @Column({ type: DataType.STRING, allowNull: false })
  label: string;

  @HasOne(() => Species)
  species: Species;

  @BelongsTo(() => Owner)
  owner: Owner;

  @ForeignKey(() => Owner)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ownerId: number;

}
