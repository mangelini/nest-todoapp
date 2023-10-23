import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(`
    ALTER TABLE todos
    ADD completed BOOLEAN,
    ADD date DATE;`);
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`
    ALTER TABLE todos
    DROP COLUMN completed,
    DROP COLUMN date;`);
}
