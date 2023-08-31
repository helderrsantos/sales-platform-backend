import { UserService } from "./user.service";
import { CreateUserDTO } from "./dtos/createUser.dto";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserEntity } from "./interfaces/user.entity";

@Controller("user")
export class UserController {
  constructor(private readonly useService: UserService) {}
  @Post()
  async CreateUser(@Body() createUser: CreateUserDTO): Promise<UserEntity> {
    return this.useService.createUser(createUser);
  }
  @Get()
  async getAllUser(): Promise<UserEntity[]> {
    return this.useService.getAllUser();
  }
}
