import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Address } from './adresses.model';
import { CreateAddressDto } from './dto/create-address.dto';
import { IAddress } from '../shared/models/interfaces/address';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {

  constructor(@InjectModel(Address) private addressRepository: typeof Address) {
  }

  async create(dto: CreateAddressDto): Promise<IAddress> {
    return await this.addressRepository.create(dto);
  }

  async getAll(): Promise<IAddress[]> {
    return await this.addressRepository.findAll();
  }

  async update(id: number, updateAddressDto: UpdateAddressDto): Promise<IAddress> {
    await this.addressRepository.update(updateAddressDto, { where: { id } });
    return await this.getById(updateAddressDto.id);
  }

  async getById(id: number): Promise<IAddress> {
    return await this.addressRepository.findByPk(id);
  }

  async delete(id: number) {
    await this.addressRepository.destroy({ where: { id } });
    return this.getById(id);
  }
}
