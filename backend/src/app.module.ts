import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentsModule } from './appointments/appointments.module';
import { PInformationModule } from './p-information/p-information.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/api-blackstone', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AppointmentsModule,
    PInformationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
