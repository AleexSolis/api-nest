import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './interfaces/users.interface';
import { UsersDTO } from './dto/users.dto';
import { PInformationService } from '../p-information/p-information.service';
import { PInformation } from '../p-information/interfaces/p-information.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<Users>,
  ) {}

  async getUsers(): Promise<Users[]> {
    const users = await this.usersModel.find();
    return users;
  }

  async getClinician(): Promise<Users[]> {
    const users = await this.usersModel.find({ typeUser: 2 });
    users.forEach(user => {
      console.log(user);
    });
    return users;
  }

  async getUser(id: string): Promise<Users> {
    const user = await this.usersModel.findById(id);
    return user;
  }

  async createUser(userDTO: UsersDTO): Promise<Users> {
    const newUser = new this.usersModel(userDTO);
    await newUser.save();
    return newUser;
  }

  async updateUser(id: string, userDTO: UsersDTO): Promise<Users> {
    const userUpdate = await this.usersModel.findByIdAndUpdate(id, userDTO, {
      new: true,
    });
    return userUpdate;
  }

  async deleteUser(id: string): Promise<Users> {
    const userDelete = await this.usersModel.findByIdAndDelete(id);
    return userDelete;
  }
}
