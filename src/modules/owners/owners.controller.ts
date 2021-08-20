import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { OwnersService } from './owners.service';

@Controller('owners')
export class OwnersController {

  constructor(private ownersService: OwnersService) {
  }


  @Post()
  create(@Body() ownerDto: CreateOwnerDto) {
    return this.ownersService.createOwner(ownerDto);
  }

  @Get()
  getAll() {
    return this.ownersService.getAllOwners();
  }
}
