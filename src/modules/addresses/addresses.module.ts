import { Module } from '@nestjs/common';
import { AddressController } from './addresses.controller';
import { AddressService } from './addresses.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Address } from './adresses.model';
import { Owner } from '../owners/owners.model';

@Module({
  controllers: [
    AddressController,
  ],
  providers: [
    AddressService,
  ],
  imports: [
    SequelizeModule.forFeature([Address, Owner]),
  ],
  exports: [
    AddressService
  ]
})
export class AddressesModule {}
