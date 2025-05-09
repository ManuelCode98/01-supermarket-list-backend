/*
  Warnings:

  - Added the required column `crossed_out` to the `added_Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crossed_out` to the `crossedOutProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "added_Products" ADD COLUMN     "crossed_out" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "crossedOutProduct" ADD COLUMN     "crossed_out" TEXT NOT NULL;
