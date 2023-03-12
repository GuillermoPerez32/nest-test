import { IsString, IsNumber } from "class-validator";

export class CreateEntityADto {

    @IsString()
    entityAField1: string;

    @IsNumber()
    entityAField2: number;
}
