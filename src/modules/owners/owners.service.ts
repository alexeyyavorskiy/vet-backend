import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Owner } from './owners.model';
import { CreateOwnerDto } from './dto/create-owner.dto';

@Injectable()
export class OwnersService {

  constructor(@InjectModel(Owner) private ownerRepository: typeof Owner) {
  }

  async createOwner(dto: CreateOwnerDto) {
    return await this.ownerRepository.create(dto);
  }

  async getAllOwners() {
    return await this.ownerRepository.findAll();
  }
}
