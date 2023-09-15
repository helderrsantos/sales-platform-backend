import { InjectRepository } from "@nestjs/typeorm";
import { CartProductEntity } from "../cart-product/entities/cart-product.entity";
import { CartEntity } from "../cart/entities/cart.entity";

import { ProductEntity } from "../product/entities/product.entity";
import { Repository } from "typeorm";

import { PaymentEntity } from "./entities/payment.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,
  ) {}

  generateFinalPrice(cart: CartEntity, products: ProductEntity[]): number {
    if (!cart.cartProduct || cart.cartProduct.length === 0) {
      return 0;
    }

    return Number(
      cart.cartProduct
        .map((cartProduct: CartProductEntity) => {
          const product = products.find(
            (product) => product.id === cartProduct.productId,
          );
          if (product) {
            return cartProduct.amount * product.price;
          }

          return 0;
        })
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        .toFixed(2),
    );
  }
}
