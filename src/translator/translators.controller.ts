import { Controller, Post, Get, Body } from '@nestjs/common';
import { TranslatorsService } from './translators.service';
import { TranslatorDto } from './dto/translator.dto';


@Controller('translators')
export class TranslatorsController {
  constructor(private readonly translatorsService: TranslatorsService) { }


  @Post()
  translate(@Body() params: TranslatorDto) {
    return this.translatorsService.translateText(params);
  }

  @Get()
  getSupportedLanguages() {
    return this.translatorsService.getSupportedLanguages();
  }
}