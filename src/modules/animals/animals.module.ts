import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Species } from '../specieses/species.model';
import { Owner } from '../owners/owners.model';
import { OwnersModule } from '../owners/owners.module';
import { SpeciesesModule } from '../specieses/specieses.module';
import { Animal } from './animals.model';

@Module({
  controllers: [AnimalsController],
  providers: [AnimalsService],
  imports: [
    SpeciesesModule,
    OwnersModule,
    SequelizeModule.forFeature([Owner, Species, Animal]),
  ],
})
export class AnimalsModule {
}
