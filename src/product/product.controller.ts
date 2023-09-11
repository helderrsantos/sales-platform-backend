import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Roles } from "src/decorators/roles.decorator";
import { UserType } from "src/user/enum/user-type.enum";
import { ReturnProduct } from "./dtos/return-product.dto";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { ProductEntity } from "./entities/product.entity";
import { DeleteResult } from "typeorm";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Roles(UserType.Admin, UserType.User)
  @Get()
  async findAll(): Promise<ReturnProduct[]> {
    return (await this.productService.findAll()).map(
      (product) => new ReturnProduct(product),
    );
  }

  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  async createProduct(
    @Body() createProduct: CreateProductDTO,
  ): Promise<ProductEntity> {
    return this.productService.createProduct(createProduct);
  }

  @Roles(UserType.Admin)
  @Delete("/:productId")
  async deleteProduct(
    @Param("productId") productId: number,
  ): Promise<DeleteResult> {
    return this.productService.deleteProduct(productId);
  }
}
