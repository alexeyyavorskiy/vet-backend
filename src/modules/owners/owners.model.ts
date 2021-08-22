import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { IOwner } from '../shared/models/interfaces/owner';
import { Address } from '../addresses/adresses.model';
import { IAddress } from '../shared/models/interfaces/address';
import { Pet } from '../animals/pets.model';
import { IPet } from '../shared/models/interfaces/pet';

@Table({ tableName: 'owners' })
export class Owner extends Model<Owner, IOwner> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  fullName: string;

  @HasOne(() => Address)
  address: IAddress;

  @HasOne(() => Pet)
  animal: IPet;

}
