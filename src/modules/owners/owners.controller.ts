import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { OwnersService } from './owners.service';
import { UpdateOwnerDto } from './dto/update-owner.dto';

@Controller('owners')
export class OwnersController {

  constructor(private ownersService: OwnersService) {
  }


  @Post('/create')
  create(@Body() ownerDto: CreateOwnerDto) {
    return this.ownersService.create(ownerDto);
  }

  @Put('/update/:id')
  update(@Param() params, @Body() ownerDto: UpdateOwnerDto) {
    return this.ownersService.update(params.id, ownerDto);
  }

  @Delete('/delete/:id')
  delete(@Param() params) {
    return this.ownersService.delete(params.id);
  }

  @Get('/getAll')
  getAll() {
    return this.ownersService.getAll();
  }

  @Get('/getById/:id')
  getById(@Param() params) {
    return this.ownersService.getById(params.id);
  }
}
