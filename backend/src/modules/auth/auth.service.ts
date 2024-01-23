import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

interface UsuarioPayload {
  sub: string;
  nomeUsuario: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuariosService,
    private jwtService: JwtService,
  ) {}
  async login(email: string, senha: string) {
    const usuario = await this.usuarioService.buscaEmail(email);

    const usuarioAutenticado = await bcrypt.compare(senha, usuario.senha);

    if (!usuarioAutenticado) {
      throw new UnauthorizedException('Usuario ou senha incorretos!');
    }

    const payload: UsuarioPayload = {
      sub: usuario.id,
      nomeUsuario: usuario.nome,
    };
    return { token_acesso: await this.jwtService.signAsync(payload) };
  }
}
