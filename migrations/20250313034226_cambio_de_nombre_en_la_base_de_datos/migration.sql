/*
  Warnings:

  - You are about to drop the `CreateProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CreateProduct";

-- CreateTable
CREATE TABLE "Supermarket_list_db" (
    "id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_photo" TEXT NOT NULL,

    CONSTRAINT "Supermarket_list_db_pkey" PRIMARY KEY ("id")
);
