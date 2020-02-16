import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentsSchema } from './schemas/appointments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Appointments', schema: AppointmentsSchema },
    ]),
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
