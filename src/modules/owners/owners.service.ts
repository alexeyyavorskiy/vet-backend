import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Owner } from './owners.model';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { IOwner } from '../shared/models/interfaces/owner';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { AddressService } from '../addresses/addresses.service';

@Injectable()
export class OwnersService {

  constructor(@InjectModel(Owner) private ownerRepository: typeof Owner,
              private addressService: AddressService) {
  }

  async create(dto: CreateOwnerDto): Promise<IOwner> {
    const owner = await this.ownerRepository.create(dto);
    if (dto.address) {
      dto.address.ownerId = owner.id;
      const address = await this.addressService.create(dto.address);
      await owner.$set('address', address.id);
      owner.address = address;
      await owner.save();
    }
    return this.getById(owner.id);
  }

  async getAll(): Promise<IOwner[]> {
    return await this.ownerRepository.findAll({ include: { all: true } });
  }

  async update(id: number, updateOwnerDto: UpdateOwnerDto): Promise<IOwner> {
    const owner = await this.getById(id);
    if (updateOwnerDto.address) {
      await this.addressService.update(owner.address.id, updateOwnerDto.address);
    }
    await this.ownerRepository.update(updateOwnerDto, { where: { id } });
    return this.getById(id);
  }

  async getById(id: number): Promise<IOwner> {
    return await this.ownerRepository.findByPk(id, { include: { all: true } });
  }

  async delete(id: number): Promise<IOwner> {
    const owner = await this.getById(id);
    if (owner.address) {
      await this.addressService.delete(owner.address.id);
    }
    await this.ownerRepository.destroy({ where: { id } });
    return owner;
  }
}
