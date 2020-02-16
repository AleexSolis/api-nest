import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Appointments } from './interfaces/appointments.interface';
import { AppointmentsDTO } from './dto/appointments.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel('Appointments')
    private readonly appointmentsModel: Model<Appointments>,
  ) {}

  async getAppointments(): Promise<Appointments[]> {
    const appointments = await this.appointmentsModel.find();
    return appointments;
  }

  async getAppointment(id: string): Promise<Appointments> {
    const appointment = await this.appointmentsModel.findById(id);
    return appointment;
  }

  async createAppointment(
    appointmentDTO: AppointmentsDTO,
  ): Promise<Appointments> {
    const newAppointment = new this.appointmentsModel(appointmentDTO);
    await newAppointment.save();
    return newAppointment;
  }

  async updateAppointment(
    id: string,
    appointmentDTO: AppointmentsDTO,
  ): Promise<Appointments> {
    const appointmentUpdate = await this.appointmentsModel.findByIdAndUpdate(
      id,
      appointmentDTO,
      { new: true },
    );
    return appointmentUpdate;
  }

  async deleteAppointment(id: string): Promise<Appointments> {
    const appointmentDelete = await this.appointmentsModel.findByIdAndDelete(
      id,
    );
    return appointmentDelete;
  }
}
