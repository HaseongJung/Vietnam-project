/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Type` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Type_slug_key" ON "Type"("slug");
