/*
  Warnings:

  - You are about to drop the column `address` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `typeName` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `countryName` on the `Country` table. All the data in the column will be lost.
  - Added the required column `addressEng` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressKor` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressVie` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameEng` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameKor` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameVie` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameEng` to the `Type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameKor` to the `Type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameVie` to the `Type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameEng` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameKor` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameVie` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Restaurant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "nameVie" TEXT NOT NULL,
    "descriptionVie" TEXT,
    "addressVie" TEXT NOT NULL,
    "nameKor" TEXT NOT NULL,
    "descriptionKor" TEXT,
    "addressKor" TEXT NOT NULL,
    "nameEng" TEXT NOT NULL,
    "descriptionEng" TEXT,
    "addressEng" TEXT NOT NULL,
    "rating" INTEGER,
    "openingTime" TEXT,
    "closingTime" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "countryId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    CONSTRAINT "Restaurant_countryId_typeId_fkey" FOREIGN KEY ("countryId", "typeId") REFERENCES "Provider" ("countryId", "typeId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Restaurant" ("closingTime", "countryId", "createdAt", "id", "openingTime", "rating", "slug", "typeId", "updatedAt") SELECT "closingTime", "countryId", "createdAt", "id", "openingTime", "rating", "slug", "typeId", "updatedAt" FROM "Restaurant";
DROP TABLE "Restaurant";
ALTER TABLE "new_Restaurant" RENAME TO "Restaurant";
CREATE UNIQUE INDEX "Restaurant_slug_key" ON "Restaurant"("slug");
CREATE TABLE "new_Type" (
    "typeId" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "nameVie" TEXT NOT NULL,
    "nameKor" TEXT NOT NULL,
    "nameEng" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Type" ("typeId") SELECT "typeId" FROM "Type";
DROP TABLE "Type";
ALTER TABLE "new_Type" RENAME TO "Type";
CREATE UNIQUE INDEX "Type_typeId_key" ON "Type"("typeId");
CREATE TABLE "new_Country" (
    "countryId" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "nameVie" TEXT NOT NULL,
    "nameKor" TEXT NOT NULL,
    "nameEng" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Country" ("countryId") SELECT "countryId" FROM "Country";
DROP TABLE "Country";
ALTER TABLE "new_Country" RENAME TO "Country";
CREATE UNIQUE INDEX "Country_countryId_key" ON "Country"("countryId");
CREATE TABLE "new_Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Image_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("id", "restaurantId", "url") SELECT "id", "restaurantId", "url" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
