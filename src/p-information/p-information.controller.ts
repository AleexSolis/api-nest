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

import { PInformationDTO } from './dto/p-information.dto';
import { PInformationService } from './p-information.service';

@Controller('p-information')
export class PInformationController {
  constructor(private pInformationService: PInformationService) {}

  @Get('/')
  async getPInformation(@Res() res) {
    const pInformation = await this.pInformationService.getPInformation();
    return res.status(HttpStatus.OK).json({
      pInformation,
    });
  }

  @Get('/:id')
  async getPInformationID(@Res() res, @Param('id') id) {
    const pInformation = await this.pInformationService.getPInformationID(id);
    if (!pInformation)
      throw new NotFoundException('Personal Information Does Not Exist');
    return res.status(HttpStatus.OK).json({
      pInformation,
    });
  }

  @Post('/create')
  async create(@Res() res, @Body() pInformationDTO: PInformationDTO) {
    const pInformation = await this.pInformationService.createPInformation(
      pInformationDTO,
    );
    res.status(HttpStatus.OK).json({
      message: 'Personal Information Created Successfully',
      pInformation,
    });
  }

  @Put('/update/:id')
  async update(
    @Res() res,
    @Param('id') id,
    @Body() pInformationDTO: PInformationDTO,
  ) {
    const pInformation = await this.pInformationService.updatePInformation(
      id,
      pInformationDTO,
    );
    res.status(HttpStatus.OK).json({
      message: 'Personal Information Updated Successfully',
      pInformation,
    });
  }

  @Delete('/delete/:id')
  async deletePInformationID(@Res() res, @Param('id') id) {
    const pInformation = await this.pInformationService.deletePInformation(id);
    if (!pInformation)
      throw new NotFoundException('Personal Information Does Not Exist');
    return res.status(HttpStatus.OK).json({
      message: 'Personal Information Deleted Successfully',
      pInformation,
    });
  }
}
