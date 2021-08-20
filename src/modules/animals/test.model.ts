import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'tests' })
export class Test extends Model<Test, { name: string }> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
}
