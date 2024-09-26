/*
  Warnings:

  - A unique constraint covering the columns `[id,ordem]` on the table `subtipos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,ordem]` on the table `subunidades` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,ordem]` on the table `unidades` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `subtipos_ordem_key` ON `subtipos`;

-- DropIndex
DROP INDEX `subunidades_ordem_key` ON `subunidades`;

-- DropIndex
DROP INDEX `unidades_ordem_key` ON `unidades`;

-- CreateIndex
CREATE UNIQUE INDEX `subtipos_id_ordem_key` ON `subtipos`(`id`, `ordem`);

-- CreateIndex
CREATE UNIQUE INDEX `subunidades_id_ordem_key` ON `subunidades`(`id`, `ordem`);

-- CreateIndex
CREATE UNIQUE INDEX `unidades_id_ordem_key` ON `unidades`(`id`, `ordem`);
