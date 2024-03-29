import { BadRequestException, Injectable, Request } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dtos/registerUser.dto';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dtos/loginUser.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async register(requestBody: RegisterUserDto) {
    // check email is exist
    const userByEmail = await this.usersService.findByEmail(requestBody.email);
    if (userByEmail) {
      throw new BadRequestException('Email already exist!');
    }
    //hash password
    const hashedPassword = await bcrypt.hash(requestBody.password, 10);

    requestBody.password = hashedPassword;

    //save to db
    const savedUser = await this.usersService.create(requestBody);

    //generate jwt token
    const payload = {
      id: savedUser.id,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
      role: savedUser.role,
    };
    const access_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });

    return {
      msg: 'User has been created!',
      access_token,
    };
  }
  async login(requestBody: LoginUserDto) {
    const userByEmail = await this.usersService.findByEmail(requestBody.email);
    if (!userByEmail) {
      throw new BadRequestException('Invalid Credentials!');
    }
    //check password
    const isMatchPassword = await bcrypt.compare(
      requestBody.password,
      userByEmail.password,
    );

    if (!isMatchPassword) {
      throw new BadRequestException('Invalid Credentials!');
    }
    //generate jwt token
    const payload = {
      id: userByEmail.id,
      firstName: userByEmail.firstName,
      lastName: userByEmail.lastName,
      email: userByEmail.email,
      role: userByEmail.role,
    };
    const access_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });
    return {
      msg: 'User has been login successfully!',
      access_token,
    };
  }
}
