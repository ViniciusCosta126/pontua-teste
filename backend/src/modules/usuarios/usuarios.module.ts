import { Module } from '@nestjs/common';
import { EmailEhUnicoValidator } from 'src/validacao/email-unico.validator';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService, EmailEhUnicoValidator],
  exports: [UsuariosService],
})
export class UsuariosModule {}
