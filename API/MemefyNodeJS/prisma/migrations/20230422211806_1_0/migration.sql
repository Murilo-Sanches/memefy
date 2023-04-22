/*
  Warnings:

  - You are about to drop the column `active` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `banned` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `profile_name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(101)` to `VarChar(51)`.
  - You are about to drop the column `cell_phone` on the `user_contact` table. All the data in the column will be lost.
  - Made the column `last_login` on table `user_security` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `active`,
    DROP COLUMN `banned`,
    MODIFY `profile_picture` VARCHAR(255) NOT NULL DEFAULT 'wwwroot/default/profile.png',
    MODIFY `profile_background` VARCHAR(255) NOT NULL DEFAULT 'wwwroot/default/background.png',
    MODIFY `profile_name` VARCHAR(51) NOT NULL;

-- AlterTable
ALTER TABLE `user_contact` DROP COLUMN `cell_phone`,
    ADD COLUMN `email_confirmed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `mobile_confirmed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `mobile_number` VARCHAR(15) NULL;

-- AlterTable
ALTER TABLE `user_security` MODIFY `last_login` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
