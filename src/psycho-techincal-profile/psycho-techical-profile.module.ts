import { Module } from '@nestjs/common';
import { PsychoTechicalProfileService } from './psycho-techical-profile.service';
import { PsychoTechicalProfileController } from './psycho-techincal-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PsychoTechincalProfile } from './entities/psycho-techincal-profile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PsychoTechincalProfile])],
  controllers: [PsychoTechicalProfileController],
  providers: [PsychoTechicalProfileService],
  exports: [PsychoTechicalProfileService],
})
export class PsychoTechicalProfileModule {}
