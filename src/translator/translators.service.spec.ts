require('dotenv').config();

import { Test, TestingModule } from '@nestjs/testing';
import { TranslatorsService } from './translators.service'
import { getSupportedLanguagesResponseMock, translateTextResponseMock} from './translators.mock'

describe('TranslatorsService', () => {
    let translatorsService: TranslatorsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TranslatorsService,
            ],
        }).compile();

        translatorsService = module.get<TranslatorsService>(
            TranslatorsService,
        );
    });

    it('should be defined', () => {
        expect(translatorsService).toBeDefined();
    });

    it('should translate a text', async () => {
        const result = await translatorsService.translateText({
            text: 'Olá Mundo, como vai?',
            source: 'pt',
            target: 'en',
            mimeType: 'text/plain'
        })

        expect(result).toStrictEqual(translateTextResponseMock);
    });

    it('should get supported languages', async () => {
        const result = await translatorsService.getSupportedLanguages()

        expect(result).toStrictEqual(getSupportedLanguagesResponseMock);
    });
})