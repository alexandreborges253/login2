import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { authAdmin } from './auth/firebase-admin';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
   const request = context.switchToHttp().getRequest();
    
    // Pega o token do header 'Authorization: Bearer <TOKEN>'
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException('Token não fornecido ou inválido');
    }

    try {
      // Valida o token com o Firebase
      const decodedToken = await authAdmin.verifyIdToken(token);
      
      // Anexa os dados do usuário (UID, email) na requisição
      request.user = decodedToken;
      
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token expirado ou inválido');
    }
  }
}