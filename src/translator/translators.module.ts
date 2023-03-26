import { Module } from '@nestjs/common';
import { TranslatorsService } from '../translator/translators.service';
import { TranslatorsController } from './translators.controller';


@Module({
  controllers: [TranslatorsController],
  providers: [TranslatorsService],
  exports: [TranslatorsService],
})
export class TranslatorsModule {}