import { Module } from '@nestjs/common';
import { PInformationController } from './p-information.controller';
import { PInformationService } from './p-information.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PInformationSchema } from './schemas/p-information.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PInformation', schema: PInformationSchema },
    ]),
  ],
  controllers: [PInformationController],
  providers: [PInformationService],
})
export class PInformationModule {}
