/*
  Warnings:

  - You are about to alter the column `fullname` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(350)`.
  - You are about to alter the column `address` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(250)`.
  - You are about to alter the column `phone` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `name` on the `Menu` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `marca` on the `Moto` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `modelo` on the `Moto` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `placa` on the `Moto` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `motor` on the `Moto` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to alter the column `color` on the `Moto` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to alter the column `peso` on the `Moto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `kilometraje` on the `Moto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `estado` on the `Moto` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `precio_compra` on the `Moto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `latitude` on the `Position` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(9,6)`.
  - You are about to alter the column `longitude` on the `Position` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(9,6)`.
  - You are about to alter the column `name` on the `Role` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `sequence` on the `Role` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `memo` on the `Role` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `realname` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(250)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "fullname" SET DATA TYPE VARCHAR(350),
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "address" SET DATA TYPE VARCHAR(250),
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "update_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Menu" ALTER COLUMN "name" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "sequence" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Moto" ALTER COLUMN "marca" DROP NOT NULL,
ALTER COLUMN "marca" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "modelo" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "anio" DROP NOT NULL,
ALTER COLUMN "placa" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "motor" DROP NOT NULL,
ALTER COLUMN "motor" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "color" DROP NOT NULL,
ALTER COLUMN "color" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "peso" DROP NOT NULL,
ALTER COLUMN "peso" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "kilometraje" DROP NOT NULL,
ALTER COLUMN "kilometraje" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "estado" DROP NOT NULL,
ALTER COLUMN "estado" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "precio_compra" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Position" ALTER COLUMN "latitude" SET DATA TYPE DECIMAL(9,6),
ALTER COLUMN "longitude" SET DATA TYPE DECIMAL(9,6);

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "name" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "sequence" DROP NOT NULL,
ALTER COLUMN "sequence" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "memo" DROP NOT NULL,
ALTER COLUMN "memo" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "update_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "realname" DROP NOT NULL,
ALTER COLUMN "realname" SET DATA TYPE VARCHAR(250),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(2000),
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "token" DROP NOT NULL,
ALTER COLUMN "update_at" DROP NOT NULL;
