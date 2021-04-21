import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619043738457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "VARCHAR(36)",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "VARCHAR(255)"
                    },
                    {
                        name: "created_at",
                        type: "TIMESTAMP",
                        default: "NOW()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
     //   await queryRunner.dropTable("users");
    }

}
