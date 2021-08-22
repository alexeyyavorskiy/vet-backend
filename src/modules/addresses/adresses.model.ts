import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { IAddress } from '../shared/models/interfaces/address';
import { Owner } from '../owners/owners.model';

@Table({ tableName: 'addresses' })
export class Address extends Model<Address, IAddress> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  street: string;

  @Column({ type: DataType.STRING, allowNull: false })
  city: string;

  @Column({ type: DataType.STRING, allowNull: false })
  country: string;

  @Column({ type: DataType.STRING, allowNull: false })
  zipCode: string;

  @BelongsTo(() => Owner)
  owner: Owner;

  @ForeignKey(() => Owner)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ownerId: number;

}
