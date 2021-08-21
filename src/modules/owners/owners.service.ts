import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Owner } from './owners.model';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { IOwner } from '../shared/models/interfaces/owner';
import { UpdateOwnerDto } from './dto/update-owner.dto';

@Injectable()
export class OwnersService {

  constructor(@InjectModel(Owner) private ownerRepository: typeof Owner) {
  }

  async createOwner(dto: CreateOwnerDto): Promise<IOwner> {
    return await this.ownerRepository.create(dto);
  }

  async getAllOwners() {
    return await this.ownerRepository.findAll();
  }

  // async update(id: string, updateOwnerDto: UpdateOwnerDto): Promise<IOwner> {
  //   await this.ownerRepository.update(updateOwnerDto, {where: {id}});
  //   return this.getOwnerById(updateOwnerDto.id);
  // }

  async getOwnerById(id: number) {
    return  await this.ownerRepository.findByPk(id);
  }

  async delete(ownerId: number) {
    await this.ownerRepository.destroy({where: { id: ownerId }});
    return this.getOwnerById(ownerId);
  }
}
