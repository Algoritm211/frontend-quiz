import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

const BASE_PROD_URL = process.env.BASE_PROD_URL;

bot.start(async (ctx) => {
  await ctx.reply(
    `Hello <b>${ctx.message.from.first_name}</b>. Welcome to 🌐JS Quiz🌐! 

➡️ Here you can enhance your skills and BECOME MORE PROFESSIONAL ENGINEER. 

<b>💻Let's start!💻</b>

📱Open the app below and complete your first quiz📱
⬇️⬇️⬇️ 

💡P.S. Don't forget to review your answers, this will make the process more efficient.💡
`,
    { parse_mode: 'HTML' }
  );
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);

    if (searchParams.get('setWebhook') === 'true') {
      const webhookUrl = `${BASE_PROD_URL}/api/bot/webhook`;

      const isSet = await bot.telegram.setWebhook(webhookUrl);
      console.log(`Set webhook to ${webhookUrl}: ${isSet}`);

      return Response.json('OK');
    }

    await bot.handleUpdate(body);

    return Response.json('OK');
  } catch (error) {
    console.error('Error sending message');
    console.log((error as Error).toString());
    return Response.json('ERROR');
  }
}
