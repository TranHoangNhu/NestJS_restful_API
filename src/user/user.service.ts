import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ROLES, User } from './user.entity';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { RegisterUserDto } from './dtos/registerUser.dto';
import { Permission } from 'src/helpers/checkPermission.helper';
import { PromoteUserDto } from './dtos/promoteUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  //CRUD
  create(requestBody: RegisterUserDto) {
    // const { email, password } = requestBody;
    const user = this.userRepo.create(requestBody);

    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  findById(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.userRepo.findOneBy({ email });
  }

  async updateById(id: number, requestBody: UpdateUserDto, currentUser: User) {
    if (requestBody.role) {
      throw new BadRequestException('You can not change role!');
    }
    let user = await this.findById(id);

    if (!user) {
      throw new NotFoundException('User does not exits');
    }

    Permission.check(id, currentUser);

    user = { ...user, ...requestBody };

    //hash password
    const hashedPassword = await bcrypt.hash(requestBody.password, 10);

    requestBody.password = hashedPassword;

    const updatedUser = await this.userRepo.save(user);
    return {
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    };
  }

  async promoteById(id: number, requestBody: PromoteUserDto) {
    if (requestBody.role === 'USER') {
      throw new BadRequestException('You can not change role!');
    }
    let user = await this.findById(id);

    if (!user) {
      throw new NotFoundException('User does not exits');
    }

    user.role = ROLES.MOD;

    const promoteUser = await this.userRepo.save(user);
    
    return {
      role: promoteUser.role,
    };
  }

  async deleteById(id: number, currentUser: User) {
    let user = await this.findById(id);

    Permission.check(id, currentUser);

    if (!user) {
      throw new NotFoundException('User does not exits');
    }

    return this.userRepo.remove(user);
  }
}


