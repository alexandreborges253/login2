import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advogado } from './advogados.entity';

@Injectable()
export class AdvogadosService {
  constructor(
    @InjectRepository(Advogado)
    private advogadosRepo: Repository<Advogado>,
  ) {}

  findAll() {
    return this.advogadosRepo.find();
  }

  findOne(id: number) {
    return this.advogadosRepo.findOneBy({ id });
  }

  create(user: Advogado, firebaseUid: string) {
    return this.advogadosRepo.save(user);
    
  }

  update(id: number, user: Advogado) {
    return this.advogadosRepo.update(id, user);
  }

  remove(id: number) {
    return this.advogadosRepo.delete(id);
  }
}
