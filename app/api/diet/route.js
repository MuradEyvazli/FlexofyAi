import dietPlans from '../../../data/dietPlans';

export async function POST(req) {
  const body = await req.json();
  const { type } = body;

  // Gelen türe göre uygun diyet planları
  const plans = dietPlans[type];

  if (!plans) {
    return new Response(
      JSON.stringify({ error: 'Geçersiz diyet türü seçildi!' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Rastgele bir plan seç
  const randomPlan = plans[Math.floor(Math.random() * plans.length)];

  return new Response(
    JSON.stringify({ plan: randomPlan }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
