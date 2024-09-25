-- CreateTable
CREATE TABLE `tipos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `cor` VARCHAR(191) NULL,
    `fundo` VARCHAR(191) NULL,
    `ordem` INTEGER NOT NULL,

    UNIQUE INDEX `tipos_ordem_key`(`ordem`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subtipos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `cor` VARCHAR(191) NULL,
    `fundo` VARCHAR(191) NULL,
    `ordem` INTEGER NOT NULL,
    `tipo_id` INTEGER NOT NULL,

    UNIQUE INDEX `subtipos_ordem_key`(`ordem`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unidades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `ordem` INTEGER NOT NULL,
    `cor` VARCHAR(191) NULL,
    `fundo` VARCHAR(191) NULL,
    `subtipo_id` INTEGER NOT NULL,

    UNIQUE INDEX `unidades_ordem_key`(`ordem`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subunidades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `ordem` INTEGER NOT NULL,
    `cor` VARCHAR(191) NULL,
    `fundo` VARCHAR(191) NULL,
    `unidade_id` INTEGER NOT NULL,

    UNIQUE INDEX `subunidades_ordem_key`(`ordem`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `subtipos` ADD CONSTRAINT `subtipos_tipo_id_fkey` FOREIGN KEY (`tipo_id`) REFERENCES `tipos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `unidades` ADD CONSTRAINT `unidades_subtipo_id_fkey` FOREIGN KEY (`subtipo_id`) REFERENCES `subtipos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subunidades` ADD CONSTRAINT `subunidades_unidade_id_fkey` FOREIGN KEY (`unidade_id`) REFERENCES `unidades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
