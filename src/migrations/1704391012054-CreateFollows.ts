import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFollows1704391012054 implements MigrationInterface {
  name = 'CreateFollows1704391012054';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "follows" ("id" SERIAL NOT NULL, "followerId" integer NOT NULL, "followingId" integer NOT NULL, CONSTRAINT "PK_d9b7a1d14ff479c1d9c5d51ebf1" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "follows"`);
  }
}
