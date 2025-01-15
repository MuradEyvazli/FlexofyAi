import { verifyToken } from "@/middleware/auth";

export async function GET(req) {
  try {
    const user = verifyToken(req);

    return new Response(
      JSON.stringify({ message: "Access granted", user }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Access denied", error: error.message }),
      { status: 401 }
    );
  }
}
