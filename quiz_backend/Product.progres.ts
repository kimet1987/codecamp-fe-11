import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    number!: number;

    @Column({ type: "text" })
    _id!: string;

    @Column({ type: "text" })
    seller!: string;

    @Column({ type: "text" })
    name!: string;

    @Column({ type: "text" })
    detail!: string;

    @Column({ type: "int" })
    price!: number;

    @CreateDateColumn()
    createdAt!: Date;
}
