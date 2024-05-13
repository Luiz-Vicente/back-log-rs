import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateDemandTable1715546689213 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		queryRunner.createTable(
			new Table({
				name: "demands",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						isNullable: false,
					},
					{
						name: "user_id",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "delivery_location",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "title",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "description",
						type: "varchar",
					},
					{
						name: "situation",
						type: "int",
						default: 0,
						isNullable: false,
					},
					{
						name: "quantity",
						type: "varchar",
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()",
					},
					{
						name: "updated_at",
						type: "timestamp",
						default: "now()",
					},
					{
						name: "deleted_at",
						type: "timestamp",
						isNullable: true,
					},
				],
			}),
			true
		);

		await queryRunner.createForeignKey(
			"demands",
			new TableForeignKey({
				columnNames: ["user_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "users",
			})
		);

		await queryRunner.createForeignKey(
			"demands",
			new TableForeignKey({
				columnNames: ["delivery_location"],
				referencedColumnNames: ["id"],
				referencedTableName: "distribution_centers",
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const table = await queryRunner.getTable("demands");
		if (table) {
			const userForeignKey = table.foreignKeys.find(fk => fk.columnNames.includes("user_id"));
			if (userForeignKey) {
				await queryRunner.dropForeignKey("demands", userForeignKey);
			}

			const deliveryForeignKey = table.foreignKeys.find(fk => fk.columnNames.includes("delivery_location"));

			if (deliveryForeignKey) {
				await queryRunner.dropForeignKey("demands", deliveryForeignKey);
			}
			
			await queryRunner.dropTable("demands");
		}
	}
}
