import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { UpdatePetDto } from './dto/update-pet.dto';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('animals')
export class AnimalsController {


  constructor(private animalsService: AnimalsService) {
  }

  @Post('/pet/create')
  create(@Body() petDto: CreatePetDto) {
    return this.animalsService.createPet(petDto);
  }

  @Put('/pet/update/:id')
  update(@Param() params, @Body() petDto: UpdatePetDto) {
    return this.animalsService.updatePet(params.id, petDto);
  }

  @Delete('/pet/delete/:id')
  delete(@Param() params) {
    return this.animalsService.deletePet(params.id);
  }

  @Get('/pet/getAll')
  getAll() {
    return this.animalsService.getAllPets();
  }

}
