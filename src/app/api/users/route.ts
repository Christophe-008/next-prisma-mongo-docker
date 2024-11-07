import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const allUsers = await prisma.user.findMany();
    return NextResponse.json(allUsers, { status: 200 });
}
