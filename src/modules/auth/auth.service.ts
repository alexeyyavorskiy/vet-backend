import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UsersService } from '../users/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/users/users.model';

@Injectable()
export class AuthService {

  constructor(private userService: UsersService,
              private jwtService: JwtService,
  ) {
  }

  async signIn(authDto: AuthDto) {
    const user = await this.validateUser(authDto);
    return this.generateToken(user);
  }

  private async validateUser(userDto: AuthDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    if (user) {
      const passwordEquals = await bcrypt.compare(userDto.password, user.password);
      if (passwordEquals) {
        return user;
      }
    }
    throw new UnauthorizedException({ message: 'Incorrect email or password' });
  }

  async signUp(authDto: AuthDto) {
    if (await this.userService.getUserByEmail(authDto.email)) {
      throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await bcrypt.hash(authDto.password, 10);
    const user = await this.userService.createUser({ ...authDto, password: hashedPassword });
    return this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

}
