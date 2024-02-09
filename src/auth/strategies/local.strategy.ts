import { Strategy } from 'passport-local';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const _user = await this.authService.validateUser(email, password);
    if (!_user) {
      throw new UnauthorizedException();
    }

    const { apiKey, ...user } = _user;
    return user;
  }
}
