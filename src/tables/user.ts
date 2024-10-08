import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", nullable: false, unique: true })
  accountId!: string;

  @Column({ type: "varchar", nullable: false })
  discordId!: string;

  @Column("simple-array")
  roles!: string[];

  @Column()
  email!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column({ default: false })
  banned!: boolean;

  @Column({ default: false })
  has_all_items!: boolean;

  @Column({ default: "" })
  hwid!: string;

  @Column({ default: "" })
  lastLogin!: string;
}
