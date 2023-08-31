const accountSid = 'AC1c3c391454a0f74bc226245a33f8e777';
const authToken = '23c843cb05fede183b5956306021b3ae';
const client = require('twilio')(accountSid, authToken);

client.calls
  .create({
    twiml: '<Response><Say>Hello, this is a phone call from your website.</Say></Response>',
    to: '+254714030900',
    from: '+19368699136'
  })
  .then(call => console.log('Call SID:', call.sid))
  .catch(error => console.error('Error making phone call:', error));
