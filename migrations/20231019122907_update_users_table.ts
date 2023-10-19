import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(`
    ALTER TABLE users
    ADD UNIQUE (username);
  `);
}

export async function down(knex: Knex): Promise<void> {}
