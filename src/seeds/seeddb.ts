import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDB1703709859028 implements MigrationInterface {
  name = 'SeedDB1703709859028';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    await queryRunner.query(
      // password 123
      `INSERT INTO users (username, email, password) VALUES ('Murilo', 'muca@gmail.com', '$2b$10$QLXmEoXMe0bOwdFOb8s5gOzvFP/HLrzKEnfs0/GErAcAvSgyj7/bG')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article description', 'First article body', 'coffee,dragons', 1), ('second-article', 'Second article', 'Second article description', 'Second article body', 'coffee,dragons', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
