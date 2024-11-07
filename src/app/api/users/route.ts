import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
    try {
        const allUsers = await prisma.user.findMany();
        return NextResponse.json(allUsers, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Unable to fetch users" },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        // Récupération des données envoyées dans la requête
        const { name, email } = await request.json();
        // const { name, email } = { name: "chris", email: "toto@gmail.com" };

        // Création de l'utilisateur dans la base de données avec Prisma
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
            },
        });

        // Retourner la réponse avec le nouvel utilisateur créé
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        // En cas d'erreur, on retourne un message d'erreur
        console.error(error);
        return NextResponse.json(
            { error: "Unable to create user" },
            { status: 500 }
        );
    }
}
