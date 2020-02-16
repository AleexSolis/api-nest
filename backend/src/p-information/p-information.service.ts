import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PInformation } from './interfaces/p-information.interface';
import { PInformationDTO } from './dto/p-information.dto';

@Injectable()
export class PInformationService {
  constructor(
    @InjectModel('PInformation')
    private readonly pInformationModel: Model<PInformation>,
  ) {}

  async getPInformation(): Promise<PInformation[]> {
    const pInformation = await this.pInformationModel.find();
    return pInformation;
  }

  async getPInformationID(id: string): Promise<PInformation> {
    const pInformation = await this.pInformationModel.findById(id);
    return pInformation;
  }

  async createPInformation(
    pInformationDTO: PInformationDTO,
  ): Promise<PInformation> {
    const newPInformation = new this.pInformationModel(pInformationDTO);
    await newPInformation.save();
    return newPInformation;
  }

  async updatePInformation(
    id: string,
    pInformationDTO: PInformationDTO,
  ): Promise<PInformation> {
    const pInformationUpdate = await this.pInformationModel.findByIdAndUpdate(
      id,
      pInformationDTO,
      {
        new: true,
      },
    );
    return pInformationUpdate;
  }

  async deletePInformation(id: string): Promise<PInformation> {
    const pInformationDelete = await this.pInformationModel.findByIdAndDelete(
      id,
    );
    return pInformationDelete;
  }
}
