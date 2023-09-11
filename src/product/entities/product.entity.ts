import { CategoryEntity } from "../../category/entities/category.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "product" })
export class ProductEntity {
  @PrimaryGeneratedColumn("rowid")
  id: number;

  @Column({ name: "name", nullable: false })
  name: string;

  @Column({ name: "category_id", nullable: false })
  categoryId: number;

  @Column({ name: "price", type: "decimal", nullable: false })
  price: number;

  @Column({ name: "image", nullable: false })
  image: string;

  @ManyToOne(
    () => CategoryEntity,
    (category: CategoryEntity) => category.products,
  )
  @JoinColumn({ name: "category_id", referencedColumnName: "id" })
  category?: CategoryEntity;
}
