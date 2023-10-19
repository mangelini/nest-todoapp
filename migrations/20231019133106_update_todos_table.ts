import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(`
    ALTER TABLE todos
    RENAME COLUMN description TO title;`);
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`
    ALTER TABLE todos
    RENAME COLUMN title TO description;`);
}
