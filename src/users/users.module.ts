import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Cliente } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
