-- CreateTable
CREATE TABLE "Dispositivo" (
    "id" SERIAL NOT NULL,
    "serial" TEXT NOT NULL,
    "moto_id" INTEGER NOT NULL,

    CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivo_moto_id_key" ON "Dispositivo"("moto_id");

-- AddForeignKey
ALTER TABLE "Dispositivo" ADD CONSTRAINT "Dispositivo_moto_id_fkey" FOREIGN KEY ("moto_id") REFERENCES "Moto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
