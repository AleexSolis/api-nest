import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';

import { UsersDTO } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async getUsers(@Res() res) {
    const users = await this.usersService.getUsers();
    return res.status(HttpStatus.OK).json({
      users,
    });
  }

  @Get('/:id')
  async getUserID(@Res() res, @Param('id') id) {
    const user = await this.usersService.getUser(id);
    if (!user) throw new NotFoundException('User does not exists');
    return res.status(HttpStatus.OK).json({
      user,
    });
  }

  @Post('/create')
  async create(@Res() res, @Body() usersDTO: UsersDTO) {
    const user = await this.usersService.createUser(usersDTO);
    res.status(HttpStatus.OK).json({
      message: 'User Created Successfully',
      user,
    });
  }

  @Put('/update/:userID')
  async update(
    @Res() res,
    @Param('userID') userID,
    @Body() usersDTO: UsersDTO,
  ) {
    const user = await this.usersService.updateUser(userID, usersDTO);
    res.status(HttpStatus.OK).json({
      message: 'User Updated Successfully',
      user,
    });
  }

  @Delete('/delete/:id')
  async deleteUserID(@Res() res, @Param('id') id) {
    const user = await this.usersService.deleteUser(id);
    if (!user) throw new NotFoundException('User does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'User Deleted Successfully',
      user,
    });
  }
}
