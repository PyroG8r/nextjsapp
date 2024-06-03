/*
  Warnings:

  - You are about to drop the `message_board` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "message_board" DROP CONSTRAINT "message_board_user_id_fkey";

-- DropTable
DROP TABLE "message_board";

-- DropTable
DROP TABLE "users";
