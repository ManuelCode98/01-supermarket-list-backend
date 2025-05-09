/*
  Warnings:

  - Added the required column `product_amount` to the `supermarket_list_db` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_price` to the `supermarket_list_db` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "supermarket_list_db" ADD COLUMN     "product_amount" INTEGER NOT NULL,
ADD COLUMN     "product_price" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "added_Products" (
    "id" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_photo" TEXT NOT NULL,
    "product_amount" INTEGER NOT NULL,
    "product_price" INTEGER NOT NULL,

    CONSTRAINT "added_Products_pkey" PRIMARY KEY ("id")
);
