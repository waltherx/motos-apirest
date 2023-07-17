-- DropForeignKey
ALTER TABLE "Dispositivo" DROP CONSTRAINT "Dispositivo_moto_id_fkey";

-- AlterTable
ALTER TABLE "Dispositivo" ALTER COLUMN "moto_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Dispositivo" ADD CONSTRAINT "Dispositivo_moto_id_fkey" FOREIGN KEY ("moto_id") REFERENCES "Moto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
