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

import { AppointmentsDTO } from './dto/appointments.dto';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}

  @Get('/')
  async getAppointments(@Res() res) {
    const appointments = await this.appointmentsService.getAppointments();
    return res.status(HttpStatus.OK).json({
      appointments,
    });
  }

  @Get('/:id')
  async getAppointmentID(@Res() res, @Param('id') id) {
    const appointment = await this.appointmentsService.getAppointment(id);
    if (!appointment) throw new NotFoundException('Appointment Does Not Exist');
    return res.status(HttpStatus.OK).json({
      appointment,
    });
  }

  @Post('/create')
  async create(@Res() res, @Body() appointmentsDTO: AppointmentsDTO) {
    const appointment = await this.appointmentsService.createAppointment(
      appointmentsDTO,
    );
    res.status(HttpStatus.OK).json({
      message: 'Appointment Created Successfully',
      appointment,
    });
  }

  @Put('/update/:id')
  async update(
    @Res() res,
    @Param('id') id,
    @Body() appointmentsDTO: AppointmentsDTO,
  ) {
    const appointment = await this.appointmentsService.updateAppointment(
      id,
      appointmentsDTO,
    );
    res.status(HttpStatus.OK).json({
      message: 'Appointment Updated Successfully',
      appointment,
    });
  }

  @Delete('/delete/:id')
  async deleteAppointmentsID(@Res() res, @Param('id') id) {
    const appointment = await this.appointmentsService.deleteAppointment(id);
    if (!appointment) throw new NotFoundException('Appointment Does Not Exist');
    return res.status(HttpStatus.OK).json({
      message: 'Appointment Deleted Successfully',
      appointment,
    });
  }
}
