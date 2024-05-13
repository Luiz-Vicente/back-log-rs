import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDistributionCentersTable1715515807390 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
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
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "storage_capacity",
                        type: "varchar",
                        isNullable: false,
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
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("demands");
    }

}
