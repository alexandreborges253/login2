import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Plano } from '../planos/planos.entity'; // Certifique-se de que o caminho está correto

@Entity('adv')
export class Advogado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  especializacao: string;

  @Column({ type: 'varchar', length: 20 })
  oab: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  data_cadastro: Date;

  @Column({
    type: 'enum',
    enum: ['ativo', 'pendente', 'cancelado'],
    default: 'ativo'
  })
  assinatura: string;

  @Column({ default: false })
  soft_delete: boolean;

  @Column({ name: 'FIREBASE_UID', nullable: true })
  firebase_uid: string;

  // Relacionamento: Vários advogados pertencem a um plano
  @ManyToOne(() => Plano)
  @JoinColumn({ name: 'plano_id' }) // Mapeia a FK plano_id do seu SQL
  plano: Plano;
}