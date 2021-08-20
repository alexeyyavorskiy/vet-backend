import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Species } from './species.model';
import { Address } from '../owners/adresses.model';
import { Owner } from '../owners/owners.model';
import { Animal } from './animals.model';

@Module({
  controllers: [AnimalsController],
  providers: [AnimalsService],
  imports: [
    SequelizeModule.forFeature([Address, Owner, Species, Animal])
  ]
})
export class AnimalsModule {}
