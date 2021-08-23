import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { IOwner } from '../shared/models/interfaces/owner';
import { Address } from '../addresses/adresses.model';
import { IAddress } from '../shared/models/interfaces/address';
import { Animal } from '../animals/animals.model';
import { IAnimal } from '../shared/models/interfaces/animal';

@Table({ tableName: 'owners' })
export class Owner extends Model<Owner, IOwner> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  fullName: string;

  @HasOne(() => Address)
  address: IAddress;

  @HasOne(() => Animal)
  animal: IAnimal;

}
