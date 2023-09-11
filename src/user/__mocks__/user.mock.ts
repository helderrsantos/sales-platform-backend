import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/user-type.enum";

export const userEntityMock: UserEntity = {
  cpf: "04540580981",
  createdAt: new Date(),
  email: "email@mock.com",
  id: 2001,
  name: "nameMock",
  password: "$2b$10$BhaMKrzUdPJFaHLcdvls7.lFMHojH9/sG/jwrp.Is0YXIlpBe4gI.",
  typeUser: UserType.User,
  updatedAt: new Date(),
  phone: "47988114454",
};
