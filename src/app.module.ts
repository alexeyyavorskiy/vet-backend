import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnimalsModule } from './modules/animals/animals.module';
import { OwnersModule } from './modules/owners/owners.module';
import { Animal } from './modules/animals/animals.model';
import { Owner } from './modules/owners/owners.model';
import { Species } from './modules/animals/species.model';
import { Address } from './modules/owners/adresses.model';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/users/users/users.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    AnimalsModule,
    OwnersModule,
    AuthModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'vet-base',
      models: [Species, Address, Owner, Animal, User],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {
}
