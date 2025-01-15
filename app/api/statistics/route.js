import connectDB from "@/lib/mongodb";
import Statistics from "@/models/Statistics";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await connectDB();

  try {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid token" }), { status: 401 });
    }

    const { date, caloriesBurned, workouts } = await req.json();

    if (!date || !caloriesBurned || !workouts) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    const newStat = await Statistics.create({
      userId: user.userId,
      date: new Date(date),
      caloriesBurned,
      workouts,
    });

    return new Response(
      JSON.stringify({ message: "Statistics saved successfully", stat: newStat }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}

export async function GET(req) {
  await connectDB();

  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");
    const timeRange = url.searchParams.get("timeRange");

    if (!userId || !timeRange) {
      return new Response(
        JSON.stringify({ message: "User ID and time range are required" }),
        { status: 400 }
      );
    }

    const now = new Date();
    const startDate =
      timeRange === "weekly"
        ? new Date(now.setDate(now.getDate() - 7))
        : new Date(now.setMonth(now.getMonth() - 1));

    const stats = await Statistics.find({
      userId,
      date: { $gte: startDate },
    });

    const totalCalories = stats.reduce((acc, curr) => acc + curr.caloriesBurned, 0);
    const totalWorkouts = stats.length;

    const dailyData = stats.map((stat) => ({
      date: stat.date.toISOString().split("T")[0],
      calories: stat.caloriesBurned,
      workouts: stat.workouts,
    }));

    return new Response(
      JSON.stringify({ totalCalories, totalWorkouts, dailyData }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}
