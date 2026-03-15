import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const application = await prisma.studentApplication.create({
      data: {
        name: body.name,
        email: body.email,
        linkedinUrl: body.linkedinUrl || null,
        isStudent: body.isStudent,
        university: body.university || null,
        program: body.program || null,
        expectedGraduation: body.expectedGraduation || null,
        whyPayments: body.whyPayments,
        hopeToGain: body.hopeToGain,
      },
    });

    return NextResponse.json(
      { success: true, id: application.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Student application error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
