import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Cliente } from './user.entity';
import { FirebaseAuthGuard } from '../auth.guard';

@Controller('users')
@UseGuards(FirebaseAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: Cliente) {
    return this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: Cliente) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
