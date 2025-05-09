-- CreateTable
CREATE TABLE "crossedOutProduct" (
    "id" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_photo" TEXT NOT NULL,
    "product_amount" INTEGER NOT NULL,
    "product_price" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,

    CONSTRAINT "crossedOutProduct_pkey" PRIMARY KEY ("id")
);
