import { Module } from '@nestjs/common';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Address } from './adresses.model';
import { Owner } from './owners.model';
import { Species } from '../animals/species.model';
import { Animal } from '../animals/animals.model';
import { AddressService } from './addresses.service';
import { AddressController } from './addresses.controller';

@Module({
  controllers: [
    OwnersController,
    AddressController,
  ],
  providers: [
    OwnersService,
    AddressService,
  ],
  imports: [
    SequelizeModule.forFeature([Address, Owner, Species, Animal]),
  ],
})
export class OwnersModule {
}
