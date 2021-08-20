import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnimalsModule } from './modules/animals/animals.module';
import { OwnersModule } from './modules/owners/owners.module';
import { Animal } from './modules/animals/animals.model';
import { Owner } from './modules/owners/owners.model';
import { Species } from './modules/animals/species.model';
import { Address } from './modules/owners/adresses.model';
import { Test } from './modules/animals/test.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    AnimalsModule,
    OwnersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'vet-base',
      models: [Test, Species, Address, Owner, Animal],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {
}
