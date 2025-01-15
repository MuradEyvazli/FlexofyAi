import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  await connectDB();

  try {
    const { name, email, password, role } = await req.json();

    const userExists = await User.findOne({ email });
    if (userExists) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    const user = await User.create({ name, email, password, role });

    return new Response(
      JSON.stringify({ message: "User created successfully", user }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error", error }), {
      status: 500,
    });
  }
}
