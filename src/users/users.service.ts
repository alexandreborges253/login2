import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Cliente)
    private usersRepo: Repository<Cliente>,
  ) {}

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: number) {
    return this.usersRepo.findOneBy({ id });
  }

  create(user: Cliente) {
    return this.usersRepo.save(user);
  }

  update(id: number, user: Cliente) {
    return this.usersRepo.update(id, user);
  }

  remove(id: number) {
    return this.usersRepo.delete(id);
  }
}
