import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnimalsModule } from './modules/animals/animals.module';
import { OwnersModule } from './modules/owners/owners.module';
import { Owner } from './modules/owners/owners.model';
import { Species } from './modules/specieses/species.model';
import { Address } from './modules/addresses/adresses.model';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/users/users/users.model';
import { UsersModule } from './modules/users/users/users.module';
import { Wild } from './modules/animals/wilds.model';
import { Pet } from './modules/animals/pets.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    AnimalsModule,
    OwnersModule,
    AuthModule,
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'vet-base',
      models: [Species, Address, Owner, Pet, Wild, User],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {
}
