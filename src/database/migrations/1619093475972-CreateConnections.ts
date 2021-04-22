import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateConnections1619093475972 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "connections",
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
                        name: "socket_id",
                        type: "VARCHAR(255)",
                    },
                    {
                        name: "created_at",
                        type: "TIMESTAMP",
                        default: "NOW()"
                    },
                    {
                        name: "updated_at",
                        type: "TIMESTAMP",
                        default: "NOW()"
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            "connections",
            new TableForeignKey({
                name: "fk_Connection_User",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                //onDelete: "SET NULL",
                //onUpdate: "SET NULL"        
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("connections", "fk_Connection_User")
        await queryRunner.dropTable("connections");
    }

}
