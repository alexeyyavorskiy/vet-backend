import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('animals')
export class AnimalsController {


  constructor(private animalsService: AnimalsService) {
  }

  @Post('/create')
  create(@Body() dto: CreateAnimalDto) {
    return this.animalsService.create(dto);
  }

  @Put('/update/:id')
  update(@Param() params, @Body() dto: UpdateAnimalDto) {
    return this.animalsService.update(params.id, dto);
  }

  @Delete('/delete/:id')
  delete(@Param() params) {
    return this.animalsService.delete(params.id);
  }

  @Get('/getAll')
  getAll() {
    return this.animalsService.getAll();
  }

  @Get('/getById/:id')
  getById(@Param() params) {
    return this.animalsService.getById(params.id);
  }

}
