import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "http://localhost:3000/api/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Rakshitha",
        email: "rakshi@test.com",
        password: "password123",
      }),
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}