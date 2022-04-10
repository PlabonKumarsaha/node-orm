import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, OneToMany } from "typeorm";
import { Banker } from "./Bankers";
import { Person } from "./common/Person";
import { Transaction } from "./Transaction";

@Entity('client')
export class Client extends Person {
	@Column({
		type: 'numeric',
	})
	balance: number;

	@Column({
		name: 'active',
		default: true,
	})
	is_active: boolean;

	@Column({
		type: 'simple-json',
		nullable: true,
	})
	additional_info: {
		age: number;
		hair_color: string;
	};

	@Column({ type: 'simple-array', default: [] })
	family_members: string[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@ManyToMany((type) => Banker, {
		cascade: true,
	})
	bankers: Banker[];

	@OneToMany(
		() => Transaction,
		(transaction) => transaction.client
	)
	transactions: Transaction[];
}