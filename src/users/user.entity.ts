import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  nome!: string;

  @Column({ type: 'varchar', length: 20 })
  email!: string;

  @Column({ type: 'varchar', length: 20 })
  documento!: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  data_cadastro!: Date;

  @Column({ default: false })
  soft_delete!: boolean;
}
