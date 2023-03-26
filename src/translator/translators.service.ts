import { Injectable } from '@nestjs/common';
import { TranslatorDto } from './dto/translator.dto';
import { v3 } from '@google-cloud/translate'


@Injectable()
export class TranslatorsService {
  translationClient: v3.TranslationServiceClient

  parent: string

  constructor() {
    this.translationClient = new v3.TranslationServiceClient();
    this.parent = 'projects/translator-web-app'
  }

  async translateText(params: TranslatorDto) {
    const [result] = await this.translationClient.translateText({
      contents: [params.text],
      targetLanguageCode: params.target,
      sourceLanguageCode: params.source,
      parent: this.parent, 
      mimeType: params.mimeType
    });

    const [translatedText] = result.translations?.map(translate => translate.translatedText)

    return {translatedText};
  }

  async getSupportedLanguages() {
    const [result] = await this.translationClient.getSupportedLanguages({ parent: this.parent, displayLanguageCode: 'en' });

    return result.languages?.map(language => ({
      code: language.languageCode,
      name: language.displayName
    }))
  }
}