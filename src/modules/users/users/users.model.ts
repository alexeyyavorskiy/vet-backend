import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';

import { IUser } from '../../shared/models/interfaces/user';

@Table({ tableName: 'users' })
export class User extends Model<User, IUser> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

}
