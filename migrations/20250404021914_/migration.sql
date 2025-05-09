/*
  Warnings:

  - Added the required column `result` to the `added_Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "added_Products" ADD COLUMN     "result" INTEGER NOT NULL;
