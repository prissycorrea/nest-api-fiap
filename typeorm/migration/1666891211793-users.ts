import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn } from '../utils/idColumn';
import { varCharColumn } from '../utils/varcharColumn';

export class users1666891211793 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          idColumn('id'),
          varCharColumn('name', '100', false),
          varCharColumn('email', '255', false, true),
          varCharColumn('password', '64', false),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
