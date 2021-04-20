import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618920819207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "VARCHAR(36)",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "VARCHAR(255)"
                    },
                    {
                        name: "chat",
                        type: "BOOLEAN"
                    },
                    {
                        name: "update_at",
                        type: "TIMESTAMP",
                        default: "NOW()"
                    },
                    {
                        name: "created_at",
                        type: "TIMESTAMP",
                        default: "NOW()"
                    },

                ]
            })
        )
    } 

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings")
    }

}
