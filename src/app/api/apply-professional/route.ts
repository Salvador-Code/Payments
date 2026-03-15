import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const application = await prisma.professionalApplication.create({
      data: {
        name: body.name,
        email: body.email,
        linkedinUrl: body.linkedinUrl,
        currentTitle: body.currentTitle,
        currentEmployer: body.currentEmployer,
        yearsExperience: body.yearsExperience,
        areasOfWork: Array.isArray(body.areasOfWork)
          ? body.areasOfWork.join(", ")
          : body.areasOfWork,
        roleDescription: body.roleDescription,
        hopeToGet: body.hopeToGet,
        canContribute: body.canContribute,
      },
    });

    return NextResponse.json(
      { success: true, id: application.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Professional application error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
