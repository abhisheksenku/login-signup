const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config(); // Load .env

// ✅ Step 1: Setup API client with API Key
const client = SibApiV3Sdk.ApiClient.instance;
client.authentications['api-key'].apiKey = process.env.SENDINBLUE_API_KEY;

// ✅ Step 2: Create Transactional Email API instance
const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

// ✅ Step 3: Define sender and receiver
const sender = {
  email: 'abhi971255@gmail.com',  // ✅ Must be verified in Brevo (Sendinblue)
  name: 'Abhishek Nani'
};

const receivers = [
  {
    email: 'uthukotaabhishek@gmail.com'  // ✅ Change to recipient's email
  }
];

// ✅ Step 4: Send the transactional email
tranEmailApi
  .sendTransacEmail({
    sender,
    to: receivers,
    subject: 'Hello from Sendinblue',
    textContent: 'This is a test email sent using Sendinblue API',
    htmlContent: `<h1>Welcome!</h1><p>This is a <strong>test</strong> email.</p>`
  })
  .then(response => {
    console.log('✅ Email sent successfully:', response);
  })
  .catch(error => {
    console.error('❌ Error sending email:', error.response?.body || error.message);
  });
