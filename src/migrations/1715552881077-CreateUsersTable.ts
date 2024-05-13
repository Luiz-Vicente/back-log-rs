import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersTable1715552881077 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
			new Table({
				name: "users",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						isNullable: false,
					},
					{
						name: "name",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "email",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "phone",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "cpf",
						type: "varchar",
					},
                    {
						name: "rg",
						type: "varchar",
					},
                    {
						name: "distribution_center",
						type: "varchar",
					},
                    {
						name: "role",
						type: "varchar",
					},
                    {
                        name: "street",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "adress_number",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "complement",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "state",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "postal_code",
                        type: "varchar",
                        isNullable: false,
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
			"users",
			new TableForeignKey({
				columnNames: ["distribution_center"],
				referencedColumnNames: ["id"],
				referencedTableName: "distribution_centers",
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("users");
		if (table) {
			const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("distribution_center") !== -1);
			if(foreignKey){
				await queryRunner.dropForeignKey("users", foreignKey);
			}
			await queryRunner.dropTable("users");
		}
    }

}
