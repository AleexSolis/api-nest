import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './interfaces/users.interface';
import { UsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<Users>,
  ) {}

  async getUsers(): Promise<Users[]> {
    const users = await this.usersModel.find();
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

  async updateUser(userID: string, userDTO: UsersDTO): Promise<Users> {
    const userUpdate = await this.usersModel.findByIdAndUpdate(
      userID,
      userDTO,
      { new: true },
    );
    return userUpdate;
  }

  async deleteUser(userID: string): Promise<Users> {
    const userDelete = await this.usersModel.findByIdAndDelete(userID);
    return userDelete;
  }
}
