const { Client } = require('whatsapp-web');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr: any) => {
  // Generate and scan this code with your phone
  console.log('QR RECEIVED', qr);
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('Client is ready!');
  console.log('Client is ready!');
  console.log('Client is ready!');
  console.log('Client is ready!');
  console.log('Client is ready!');

  // Number where you want to send the message.
  const number = "+5562985413838";

  // Your message.
  const text = "Hey john";

  // Getting chatId from the number.
  // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
  const chatId = number.substring(1) + "@c.us";

  // Sending message.
  client.sendMessage(chatId, text);
});

export default client;