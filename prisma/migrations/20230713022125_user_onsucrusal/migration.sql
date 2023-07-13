-- CreateTable
CREATE TABLE "UserOnSucrusal" (
    "user_id" INTEGER NOT NULL,
    "sucrusal_id" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" VARCHAR(150) NOT NULL DEFAULT '',

    CONSTRAINT "UserOnSucrusal_pkey" PRIMARY KEY ("user_id","sucrusal_id")
);

-- AddForeignKey
ALTER TABLE "UserOnSucrusal" ADD CONSTRAINT "UserOnSucrusal_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnSucrusal" ADD CONSTRAINT "UserOnSucrusal_sucrusal_id_fkey" FOREIGN KEY ("sucrusal_id") REFERENCES "Sucrusal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
