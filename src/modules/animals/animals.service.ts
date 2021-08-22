import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SpeciesesService } from '../specieses/specieses.service';
import { Pet } from './pets.model';
import { Wild } from './wilds.model';
import { IPet } from '../shared/models/interfaces/pet';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { OwnersService } from '../owners/owners.service';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Pet) private petRepository: typeof Pet,
              @InjectModel(Wild) private wildRepository: typeof Wild,
              private speciesesService: SpeciesesService,
              private ownersService: OwnersService) {
  }

  async createPet(dto: CreatePetDto): Promise<IPet> {
    const owner = await this.ownersService.create(dto.owner);
    dto.ownerId = owner.id;
    const animal: Pet = await this.petRepository.create(dto);
    dto.species.petId = animal.id;
    const species = await this.speciesesService.create(dto.species);
    await animal.$set('species', species.id);
    animal.species = species;
    //
    await animal.$set('owner', owner.id);
    animal.owner = owner;

    await animal.save();
    return this.getPetById(animal.id);
  }

  async getAllPets(): Promise<IPet[]> {
    return await this.petRepository.findAll({ include: { all: true } });
  }

  async updatePet(id: number, updatePetDto: UpdatePetDto): Promise<IPet> {
    const pet = await this.getPetById(id);
    if (updatePetDto.species) {
      await this.speciesesService.update(pet.species.id, updatePetDto.species);
    }
    await this.petRepository.update(updatePetDto, { where: { id } });
    return this.getPetById(id);
  }

  async getPetById(id: number): Promise<IPet> {
    return await this.petRepository.findByPk(id, { include: { all: true } });
  }

  async deletePet(id: number): Promise<IPet> {
    const pet = await this.getPetById(id);
    if (pet.species) {
      await this.speciesesService.delete(pet.species.id);
    }
    await this.petRepository.destroy({ where: { id } });
    return pet;
  }
}
