import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const allUsers = await prisma.user.findMany();
    console.log("test", allUsers);
    return NextResponse.json(allUsers, { status: 200 });
}
