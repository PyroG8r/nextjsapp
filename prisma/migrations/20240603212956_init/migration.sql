-- CreateTable
CREATE TABLE "avslutade_kurser" (
    "id" SERIAL NOT NULL,
    "kod" VARCHAR(10) NOT NULL,
    "benamning" VARCHAR(255) NOT NULL,
    "omfattning" DECIMAL(3,1) NOT NULL,
    "betyg" CHAR(1) NOT NULL,
    "datum" DATE NOT NULL,
    "notering" VARCHAR(255),

    CONSTRAINT "avslutade_kurser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message_board" (
    "id" SERIAL NOT NULL,
    "create_time" DATE DEFAULT CURRENT_DATE,
    "user_id" INTEGER,
    "message" TEXT,

    CONSTRAINT "message_board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "creation_date" DATE,
    "username" VARCHAR(255),
    "password" VARCHAR(255),
    "email" VARCHAR(255),
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "message_board" ADD CONSTRAINT "message_board_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
