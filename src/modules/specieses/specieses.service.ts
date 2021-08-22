import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Species } from './species.model';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { ISpecies } from '../shared/models/interfaces/species';
import { UpdateSpeciesDto } from './dto/update-species.dto';

@Injectable()
export class SpeciesesService {
  constructor(@InjectModel(Species) private speciesRepository: typeof Species) {
  }

  async create(dto: CreateSpeciesDto): Promise<ISpecies> {
    return await this.speciesRepository.create(dto);
  }

  async getAll(): Promise<ISpecies[]> {
    return await this.speciesRepository.findAll();
  }

  async update(id: number, updateSpeciesDto: UpdateSpeciesDto): Promise<ISpecies> {
    await this.speciesRepository.update(updateSpeciesDto, { where: { id } });
    return await this.getById(updateSpeciesDto.id);
  }

  async getById(id: number): Promise<ISpecies> {
    return await this.speciesRepository.findByPk(id);
  }

  async delete(id: number) {
    await this.speciesRepository.destroy({ where: { id } });
    return this.getById(id);
  }
}
