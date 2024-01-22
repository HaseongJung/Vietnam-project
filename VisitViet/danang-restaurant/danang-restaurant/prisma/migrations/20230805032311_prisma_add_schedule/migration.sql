-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hour" DATETIME,
    "dateTime" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    CONSTRAINT "Schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Schedule_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

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
    "rating" INTEGER DEFAULT 0,
    "openingTime" TEXT,
    "closingTime" TEXT,
    "direct" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "countryId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    CONSTRAINT "Restaurant_countryId_typeId_fkey" FOREIGN KEY ("countryId", "typeId") REFERENCES "Provider" ("countryId", "typeId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Restaurant" ("addressEng", "addressKor", "addressVie", "closingTime", "countryId", "createdAt", "descriptionEng", "descriptionKor", "descriptionVie", "direct", "id", "nameEng", "nameKor", "nameVie", "openingTime", "rating", "slug", "typeId", "updatedAt") SELECT "addressEng", "addressKor", "addressVie", "closingTime", "countryId", "createdAt", "descriptionEng", "descriptionKor", "descriptionVie", "direct", "id", "nameEng", "nameKor", "nameVie", "openingTime", "rating", "slug", "typeId", "updatedAt" FROM "Restaurant";
DROP TABLE "Restaurant";
ALTER TABLE "new_Restaurant" RENAME TO "Restaurant";
CREATE UNIQUE INDEX "Restaurant_slug_key" ON "Restaurant"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
