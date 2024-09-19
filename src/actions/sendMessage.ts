'use server';

export const sendMessage = async (_prev: any, fd: FormData) => {
  if (!process.env.DISCORD_WEBHOOK_URL)
    return { message: 'No Discord Webhook URL found.' };

  const name = fd.get('name');
  const email = fd.get('email');
  const message = fd.get('message');

  if (!name || !email || !message)
    return { message: 'Please fill in all fields.' };

  try {
    const result = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify({
        content: '@everyone',
        embeds: [
          {
            title: 'Message from website',
            description: message,
            color: 15258703,
            fields: [
              {
                name: 'Name',
                value: name,
              },
              {
                name: 'Email',
                value: email,
              },
              {
                name: 'Time',
                value: new Date().toLocaleString('pl'),
              },
            ],
          },
        ],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const msg = result.ok
      ? 'Message sent successfully!'
      : 'An error occurred while sending the message. Please try again later.';

    return { message: msg };
  } catch (error) {
    return {
      message:
        'An error occurred while sending the message. Please try again later.',
    };
  }
};
