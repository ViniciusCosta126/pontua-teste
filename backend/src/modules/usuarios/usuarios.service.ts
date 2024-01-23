import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { ListaUsuarioDTO } from './dto/list-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const novoUsuario = new Usuario();

    Object.assign(novoUsuario, createUsuarioDto as Usuario);
    const usuario = await this.usuarioRepository.save(novoUsuario);
    return usuario;
  }

  async findAll() {
    const usuarios = await this.usuarioRepository.find();

    const usuarioLista = usuarios.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.email),
    );
    return usuarioLista;
  }

  async buscaEmail(email: string) {
    const checkEmail = await this.usuarioRepository.findOne({
      where: { email },
    });

    if (checkEmail === null) {
      throw new NotFoundException('O email não foi encontrado.');
    }

    return checkEmail;
  }

  async findOne(id: string) {
    const usuario = await this.usuarioRepository.findOneBy({ id: id });

    if (!usuario) {
      throw new NotFoundException('Usuario não encontrado!');
    }

    const usuarioLista = new ListaUsuarioDTO(usuario.id, usuario.email);

    return usuarioLista;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(id);

    Object.assign(usuario, updateUsuarioDto);

    await this.usuarioRepository.save(usuario);
    return usuario;
  }

  async remove(id: string) {
    const usuario = await this.findOne(id);

    await this.usuarioRepository.delete(id);
    return usuario;
  }
}
