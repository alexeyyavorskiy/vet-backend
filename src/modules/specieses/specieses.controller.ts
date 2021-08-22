import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAddressDto } from '../addresses/dto/create-address.dto';
import { UpdateAddressDto } from '../addresses/dto/update-address.dto';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { SpeciesesService } from './specieses.service';

@Controller('specieses')
export class SpeciesesController {

  constructor(private speciesesService: SpeciesesService) {
  }

  // @Post('/create')
  // create(@Body() speciesDto: CreateSpeciesDto) {
  //   return this.speciesesService.create(speciesDto);
  // }
  //
  // @Put()
  // update(@Param() params, @Body() speciesDto: UpdateSpeciesDto) {
  //   return this.speciesesService.update(params.id, speciesDto);
  // }
  //
  // @Delete('/delete/:id')
  // delete(@Param('id') id: number) {
  //   return this.speciesesService.delete(id);
  // }
  //
  // @Get('/getAll')
  // getAll() {
  //   return this.speciesesService.getAll();
  // }
}
