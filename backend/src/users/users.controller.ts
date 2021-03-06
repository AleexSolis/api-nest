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

  @Get('/clinician')
  async getClinician(@Res() res) {
    const clinicians = await this.usersService.getUsersByType(2);
    return res.status(HttpStatus.OK).json({
      clinicians,
    });
  }

  @Get('/patient')
  async getPatient(@Res() res) {
    const patients = await this.usersService.getUsersByType(3);
    return res.status(HttpStatus.OK).json({
      patients,
    });
  }

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
    if (!user) throw new NotFoundException('User Does Not Exist');
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

  @Put('/update/:id')
  async update(@Res() res, @Param('id') id, @Body() usersDTO: UsersDTO) {
    const user = await this.usersService.updateUser(id, usersDTO);
    res.status(HttpStatus.OK).json({
      message: 'User Updated Successfully',
      user,
    });
  }

  @Delete('/delete/:id')
  async deleteUserID(@Res() res, @Param('id') id) {
    const user = await this.usersService.deleteUser(id);
    if (!user) throw new NotFoundException('User Does Not Exist');
    return res.status(HttpStatus.OK).json({
      message: 'User Deleted Successfully',
      user,
    });
  }
}
