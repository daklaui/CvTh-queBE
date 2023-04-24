import { Module } from '@nestjs/common';
import { MenucvService } from './menucv.service';
import { MenucvController } from './menucv.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menucv } from './entities/menucv.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Menucv])],
  controllers: [MenucvController],
  providers: [MenucvService],
  exports:[MenucvService]
})
export class MenucvModule {}
