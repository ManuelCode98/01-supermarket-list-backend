-- CreateTable
CREATE TABLE "CreateProduct" (
    "id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_photo" TEXT NOT NULL,

    CONSTRAINT "CreateProduct_pkey" PRIMARY KEY ("id")
);
