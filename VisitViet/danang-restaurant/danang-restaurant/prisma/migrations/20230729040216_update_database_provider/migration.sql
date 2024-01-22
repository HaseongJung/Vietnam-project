-- CreateTable
CREATE TABLE "Country" (
    "countryId" TEXT NOT NULL PRIMARY KEY,
    "countryName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Type" (
    "typeId" TEXT NOT NULL PRIMARY KEY,
    "typeName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Provider" (
    "countryId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,

    PRIMARY KEY ("countryId", "typeId"),
    CONSTRAINT "Provider_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("countryId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Provider_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("typeId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "rating" INTEGER,
    "openingTime" TEXT,
    "closingTime" TEXT,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "countryId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    CONSTRAINT "Restaurant_countryId_typeId_fkey" FOREIGN KEY ("countryId", "typeId") REFERENCES "Provider" ("countryId", "typeId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    CONSTRAINT "Image_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_countryId_key" ON "Country"("countryId");

-- CreateIndex
CREATE UNIQUE INDEX "Type_typeId_key" ON "Type"("typeId");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_slug_key" ON "Restaurant"("slug");
