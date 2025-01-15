import motivationalMessages from "@/data/motivationalMessages";

export async function GET(req) {
  try {
    // Rastgele bir motivasyon mesajı seç
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    const message = motivationalMessages[randomIndex];

    return new Response(JSON.stringify({ message }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
