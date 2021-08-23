import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SpeciesesService } from '../specieses/specieses.service';
import { OwnersService } from '../owners/owners.service';
import { Animal } from './animals.model';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { IAnimal } from '../shared/models/interfaces/animal';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal) private animalRepository: typeof Animal,
              private speciesesService: SpeciesesService,
              private ownersService: OwnersService) {
  }

  async create(dto: CreateAnimalDto): Promise<IAnimal> {
    let owner;
    if (dto.owner) {
      owner = await this.ownersService.create(dto.owner);
      dto.ownerId = owner.id;
    }
    const animal: Animal = await this.animalRepository.create(dto);
    dto.species.animalId = animal.id;
    const species = await this.speciesesService.create(dto.species);
    await animal.$set('species', species.id);
    animal.species = species;
    if (owner) {
      await animal.$set('owner', owner.id);
      animal.owner = owner;
    }
    await animal.save();
    return this.getById(animal.id);
  }

  async getAll(): Promise<IAnimal[]> {
    return await this.animalRepository.findAll({ include: { all: true } });
  }

  async update(id: number, dto: UpdateAnimalDto): Promise<IAnimal> {
    const animal: any = await this.getById(id);
    if (dto.species) {
      await this.speciesesService.update(animal.species.id, dto.species);
    }
    if (dto.owner) {
      await this.ownersService.update(animal.owner.id, dto.owner);
    }
    await this.animalRepository.update(dto, { where: { id } });
    return this.getById(id);
  }

  async getById(id: number): Promise<IAnimal> {
    return await this.animalRepository.findByPk(id, { include: { all: true } });
  }

  async delete(id: number): Promise<IAnimal> {
    const animal: any = await this.getById(id);
    if (animal.species) {
      await this.speciesesService.delete(animal.species.id);
    }
    if (animal.owner) {
      await this.ownersService.delete(animal.owner.id);
    }
    await this.animalRepository.destroy({ where: { id } });
    return animal;
  }
}
