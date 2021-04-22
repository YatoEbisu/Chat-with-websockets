import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619048656059 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    {
                        name: "id",
                        type: "VARCHAR(36)",
                        isPrimary: true
                    },
                    {
                        name: "admin_id",
                        type: "VARCHAR(36)",
                        isNullable: true
                    },
                    {
                        name: "user_id",
                        type: "VARCHAR(36)"
                    },
                    {
                        name: "text",
                        type: "VARCHAR(255)",
                    },
                    {
                        name: "created_at",
                        type: "TIMESTAMP",
                        default: "NOW()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_User",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        //onDelete: "SET NULL",
                        //onUpdate: "SET NULL"                                          
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}
