import { Module } from '@nestjs/common';
import { ResponsablePoleService } from './responsable-pole.service';
import { ResponsablePoleController } from './responsable-pole.controller';

@Module({
  controllers: [ResponsablePoleController],
  providers: [ResponsablePoleService]
})
export class ResponsablePoleModule {}
