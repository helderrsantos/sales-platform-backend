import { UserService } from "./user.service";
import { CreateUserDTO } from "./dtos/createUser.dto";
import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { ReturnUserDto } from "./dtos/returnUser.dto";

@Controller("user")
export class UserController {
  constructor(private readonly useService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async CreateUser(@Body() createUser: CreateUserDTO): Promise<UserEntity> {
    return this.useService.createUser(createUser);
  }
  @Get()
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.useService.getAllUser()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }
}
