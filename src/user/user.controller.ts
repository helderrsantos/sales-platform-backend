import { CreateUserDTO } from "./dtos/createUser.dto";
import { Body, Controller, Post } from "@nestjs/common";

@Controller("user")
export class UserController {
  @Post()
  async CreateUser(@Body() createUser: CreateUserDTO) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
