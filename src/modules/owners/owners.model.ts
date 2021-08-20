import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { IOwner } from '../shared/models/interfaces/owner';
import { Address } from './adresses.model';
import { Animal } from '../animals/animals.model';

@Table({ tableName: 'owners' })
export class Owner extends Model<Owner, IOwner> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  fullName: string;

  @HasOne(() => Address)
  address: Address;

  @HasOne(() => Animal)
  animal: Animal;

}
