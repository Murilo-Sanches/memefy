/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSecurity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `UserSecurity` DROP FOREIGN KEY `UserSecurity_userId_fkey`;

-- DropTable
DROP TABLE `User`;

-- DropTable
DROP TABLE `UserSecurity`;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(15) NOT NULL,
    `profile_picture` VARCHAR(255) NOT NULL DEFAULT 'www/default/profile.png',
    `profile_background` VARCHAR(255) NOT NULL DEFAULT 'www/default/background.png',
    `profile_name` VARCHAR(101) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `banned` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_security` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `password` VARCHAR(255) NOT NULL,
    `recovery_email` VARCHAR(320) NULL,
    `password_changed_at` DATETIME(3) NULL,
    `password_reset_token` VARCHAR(255) NULL,
    `password_reset_expires` DATETIME(3) NULL,
    `two_factor_enabled` BOOLEAN NOT NULL DEFAULT false,
    `two_factor_secret` VARCHAR(255) NULL,
    `last_login` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` INTEGER UNSIGNED NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_security_id_key`(`id`),
    UNIQUE INDEX `user_security_user_id_key`(`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_contact` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(320) NOT NULL,
    `cell_phone` VARCHAR(15) NULL,
    `first_name` VARCHAR(25) NOT NULL,
    `last_name` VARCHAR(25) NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_contact_id_key`(`id`),
    UNIQUE INDEX `user_contact_email_key`(`email`),
    UNIQUE INDEX `user_contact_user_id_key`(`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_security` ADD CONSTRAINT `user_security_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_contact` ADD CONSTRAINT `user_contact_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
