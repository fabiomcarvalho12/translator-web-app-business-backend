import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TranslatorsModule } from './translator/translators.module';

@Module({
  imports: [ConfigModule.forRoot(), TranslatorsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
