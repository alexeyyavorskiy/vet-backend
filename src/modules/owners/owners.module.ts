import { Module } from '@nestjs/common';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Address } from './adresses.model';
import { Owner } from './owners.model';
import { Species } from '../animals/species.model';
import { Animal } from '../animals/animals.model';
import { Test } from '../animals/test.model';

@Module({
  controllers: [OwnersController],
  providers: [OwnersService],
  imports: [
    SequelizeModule.forFeature([Test, Address, Owner, Species, Animal])
  ]
})
export class OwnersModule {}
