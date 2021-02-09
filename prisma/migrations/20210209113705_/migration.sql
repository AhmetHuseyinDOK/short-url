-- CreateTable
CREATE TABLE "Link" (
    "shortened" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "lastUsed" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("shortened")
);
