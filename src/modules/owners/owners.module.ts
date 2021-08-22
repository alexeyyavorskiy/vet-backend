import { Module } from '@nestjs/common';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Address } from '../addresses/adresses.model';
import { Owner } from './owners.model';
import { AddressesModule } from '../addresses/addresses.module';

@Module({
  controllers: [
    OwnersController,
  ],
  providers: [
    OwnersService,
  ],
  imports: [
    AddressesModule,
    SequelizeModule.forFeature([Address, Owner]),
  ],
  exports: [
    OwnersService
  ]
})
export class OwnersModule {
}
