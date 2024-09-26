/*
  Warnings:

  - A unique constraint covering the columns `[tipo_id,ordem]` on the table `subtipos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[unidade_id,ordem]` on the table `subunidades` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subtipo_id,ordem]` on the table `unidades` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `subtipos_id_ordem_key` ON `subtipos`;

-- DropIndex
DROP INDEX `subunidades_id_ordem_key` ON `subunidades`;

-- DropIndex
DROP INDEX `unidades_id_ordem_key` ON `unidades`;

-- CreateIndex
CREATE UNIQUE INDEX `subtipos_tipo_id_ordem_key` ON `subtipos`(`tipo_id`, `ordem`);

-- CreateIndex
CREATE UNIQUE INDEX `subunidades_unidade_id_ordem_key` ON `subunidades`(`unidade_id`, `ordem`);

-- CreateIndex
CREATE UNIQUE INDEX `unidades_subtipo_id_ordem_key` ON `unidades`(`subtipo_id`, `ordem`);
