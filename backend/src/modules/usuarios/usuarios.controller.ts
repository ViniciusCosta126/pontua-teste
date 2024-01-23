import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { HashearSenhaPipe } from 'src/recursos/hashear-senha.pipe';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(
    @Body() { senha, ...dadosDoUsuario }: CreateUsuarioDto,
    @Body('senha', HashearSenhaPipe) senhaHasheada: string,
  ) {
    const usuario = await this.usuariosService.create({
      senha: senhaHasheada,
      ...dadosDoUsuario,
    });
    return { message: 'Usuario criado com sucesso!' };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const usuario = await this.usuariosService.findOne(id);
    return usuario;
  }

  @Get()
  async findAll() {
    return await this.usuariosService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioAtualizado = this.usuariosService.update(id, updateUsuarioDto);
    return { message: 'Usuario atualizado com sucesso!' };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const usuarioDeletado = this.usuariosService.remove(id);
    return { message: 'Usuario deletado com sucesso!' };
  }
}
