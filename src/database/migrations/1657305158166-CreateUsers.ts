import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsers1657305158166 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "users",
          columns:
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
