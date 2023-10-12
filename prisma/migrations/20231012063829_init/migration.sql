-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "realname" VARCHAR(250) DEFAULT '',
    "password" VARCHAR(2000) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT DEFAULT '',
    "status" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3),
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "sequence" VARCHAR(50) DEFAULT '',
    "memo" VARCHAR(50) DEFAULT '',
    "status" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3),

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "ci" INTEGER NOT NULL,
    "fullname" VARCHAR(350) NOT NULL,
    "address" VARCHAR(250) DEFAULT '',
    "phone" VARCHAR(20) DEFAULT '',
    "status" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3),

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Moto" (
    "id" SERIAL NOT NULL,
    "marca" VARCHAR(100) DEFAULT '',
    "modelo" VARCHAR(100) NOT NULL,
    "anio" INTEGER DEFAULT 0,
    "placa" VARCHAR(15) NOT NULL,
    "motor" VARCHAR(10) DEFAULT '',
    "color" VARCHAR(10) DEFAULT '',
    "peso" DECIMAL(10,2) DEFAULT -1,
    "kilometraje" DECIMAL(10,2) DEFAULT -1,
    "estado" VARCHAR(50) DEFAULT '',
    "fecha_compra" TIMESTAMP(3) NOT NULL,
    "precio_compra" DECIMAL(10,2) NOT NULL DEFAULT -1,
    "client_id" INTEGER NOT NULL,

    CONSTRAINT "Moto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispositivo" (
    "id" SERIAL NOT NULL,
    "serial" TEXT NOT NULL,
    "moto_id" INTEGER,

    CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latitude" DECIMAL(9,6) NOT NULL,
    "longitude" DECIMAL(9,6) NOT NULL,
    "timestamp" INTEGER,
    "speed" DECIMAL(8,6),
    "batt" DECIMAL(8,6),
    "dispositivo_id" INTEGER NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Client_ci_key" ON "Client"("ci");

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivo_moto_id_key" ON "Dispositivo"("moto_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Moto" ADD CONSTRAINT "Moto_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispositivo" ADD CONSTRAINT "Dispositivo_moto_id_fkey" FOREIGN KEY ("moto_id") REFERENCES "Moto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_dispositivo_id_fkey" FOREIGN KEY ("dispositivo_id") REFERENCES "Dispositivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
