/*
  Warnings:

  - You are about to drop the `Supermarket_list_db` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Supermarket_list_db";

-- CreateTable
CREATE TABLE "supermarket_list_db" (
    "id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_photo" TEXT NOT NULL,

    CONSTRAINT "supermarket_list_db_pkey" PRIMARY KEY ("id")
);
