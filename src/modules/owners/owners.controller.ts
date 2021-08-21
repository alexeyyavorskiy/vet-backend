import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { OwnersService } from './owners.service';

@Controller('owners')
export class OwnersController {

  constructor(private ownersService: OwnersService) {
  }


  @Post('/create')
  create(@Body() ownerDto: CreateOwnerDto) {
    return this.ownersService.createOwner(ownerDto);
  }

  // @Put()
  // update(@Param() params, @Body() ownerDto: UpdateOwnerDto) {
  //   return this.ownersService.update(params.id, ownerDto);
  // }

  @Delete('/delete/:id')
  update(@Param('id') id: number) {
    return this.ownersService.delete(id);
  }

  @Get('/getAll')
  getAll() {
    return this.ownersService.getAllOwners();
  }
}
