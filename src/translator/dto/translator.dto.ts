import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class TranslatorDto {
  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  text: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  target: string;


  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  source: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  mimeType: string;

}