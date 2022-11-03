import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

export class CreateProductsDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  categoryID: number;
}
