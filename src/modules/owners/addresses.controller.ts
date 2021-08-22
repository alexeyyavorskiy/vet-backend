import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('owners')
export class AddressController {

  constructor(private addressService: AddressService) {
  }


  @Post('/create')
  create(@Body() addressDto: CreateAddressDto) {
    return this.addressService.create(addressDto);
  }

  @Put()
  update(@Param() params, @Body() addressDto: UpdateAddressDto) {
    return this.addressService.update(params.id, addressDto);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: number) {
    return this.addressService.delete(id);
  }

  @Get('/getAll')
  getAll() {
    return this.addressService.getAll();
  }
}
