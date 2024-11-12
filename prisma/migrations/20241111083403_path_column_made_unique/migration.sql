/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `links` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `links_path_key` ON `links`(`path`);
