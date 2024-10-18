-- CreateTable
CREATE TABLE `useruploads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userid` INTEGER NOT NULL,
    `userfilename` VARCHAR(191) NOT NULL,
    `tags` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT (NOW() + '30 days'),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
