interface ReturnDelivery {
  deliveryTime: number;
  deliveryPrice: number;
  typeDelivery: number;
}

export class ReturnPriceDeliveryDto {
  delivery: ReturnDelivery[];
}
