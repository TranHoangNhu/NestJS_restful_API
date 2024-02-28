import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { RegisterUserDto } from './dtos/registerUser.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dtos/loginUser.dto';
import { CurrentUser } from './decorators/currentUser.decorator';
import { RoleGuard } from 'src/guards/role.guard';
import { User } from './user.entity';
import { ApiBearerAuth } from '@nestjs/swagger';
import { PromoteUserDto } from './dtos/promoteUser.dto';

@Controller('/api/v1/users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(
    private userService: UserService,
    private authSerivce: AuthService,
  ) {}

  @ApiBearerAuth()
  @Get()
  @UseGuards(new RoleGuard(['admin', 'mod']))
  @UseGuards(AuthGuard)
  getAllUser() {
    return this.userService.findAll();
  }

  @ApiBearerAuth()
  @Get('/current-user')
  @UseGuards(AuthGuard)
  getCurrentUser(@CurrentUser() currentUser) {
    return currentUser;
  }

  @ApiBearerAuth()
  @UseGuards(new RoleGuard(['admin', 'mod']))
  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findById(id);
  }

  @ApiBearerAuth()
  @Put('/:id')
  @UseGuards(new RoleGuard(['admin', 'mod']))
  @UseGuards(AuthGuard)
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() requestBody: UpdateUserDto,
    @CurrentUser() currentUser: User,
  ) {
    return this.userService.updateById(id, requestBody, currentUser);
  }

  @ApiBearerAuth()
  @Put('promote/:id')
  @UseGuards(new RoleGuard(['admin', 'mod']))
  @UseGuards(AuthGuard)
  promoteUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() requestBody: PromoteUserDto,
  ) {
    return this.userService.promoteById(id, requestBody);
  }

  @ApiBearerAuth()
  @Delete('/:id')
  @UseGuards(new RoleGuard(['admin']))
  @UseGuards(AuthGuard)
  deleteUser(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() currentUser: User,
  ) {
    return this.userService.deleteById(id, currentUser);
  }

  @Post('/register')
  registerUser(@Body() requestBody: RegisterUserDto) {
    return this.authSerivce.register(requestBody);
  }

  @Post('/login')
  loginUser(@Body() requestBody: LoginUserDto) {
    return this.authSerivce.login(requestBody);
  }
}
