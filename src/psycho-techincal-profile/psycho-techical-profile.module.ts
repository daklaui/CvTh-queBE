import { Module } from '@nestjs/common';
import { PsychoTechicalProfileService } from './psycho-techical-profile.service';
import { PsychoTechicalProfileController } from './psycho-techincal-profile.controller';

@Module({
  controllers: [PsychoTechicalProfileController],
  providers: [PsychoTechicalProfileService]
})
export class PsychoTechicalProfileModule {}
