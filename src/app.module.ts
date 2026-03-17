import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PlanoModule } from './planos/planos.module';
import { ClienteAdvogadoModule } from './cliente_advogado/cliente_advogado.module';
import { AdvogadosModule } from './advogados/advogados.module';

type EnvConfig = {
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASS: string;
  DB_NAME: string;
  DB_SYNC: string;
};
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<EnvConfig>) => ({
        type: 'mysql',
        host: config.get('DB_HOST') as string,
        port: Number(config.get('DB_PORT')),
        username: config.get('DB_USER') as string,
        password: config.get('DB_PASS') as string,
        database: config.get('DB_NAME') as string,
        autoLoadEntities: true,
        synchronize: config.get('DB_SYNC') === 'true',
        retryAttempts: 10,
        retryDelay: 3000,
      }),
    }),
    UsersModule,
    PlanoModule,
    ClienteAdvogadoModule,
    AdvogadosModule,
  ],
})
export class AppModule {}
