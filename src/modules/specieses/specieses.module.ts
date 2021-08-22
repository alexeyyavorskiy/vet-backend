import { Module } from '@nestjs/common';
import { SpeciesesService } from './specieses.service';
import { SpeciesesController } from './specieses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Species } from './species.model';

@Module({
  providers: [SpeciesesService],
  controllers: [SpeciesesController],
  exports: [
    SpeciesesService
  ],
  imports: [
    SequelizeModule.forFeature([Species]),
  ]
})
export class SpeciesesModule {}
