export const verificationEmailTemplate = (verificationToken, name) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .container {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 30px;
    }
    .header {
      color: #2c3e50;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .greeting {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .otp-container {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 4px;
      text-align: center;
      margin: 25px 0;
    }
    .otp {
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 3px;
      color: #2c3e50;
    }
    .note {
      font-size: 14px;
      color: #7f8c8d;
      margin-top: 5px;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #95a5a6;
      text-align: center;
    }
    .divider {
      border-top: 1px solid #e0e0e0;
      margin: 25px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">Verify Your Email</div>
    
    <div class="greeting">Hello ${name || "User"},</div>
    
    <p>Thank you for registering with us! Please use the following OTP to verify your email address:</p>
    
    <div class="otp-container">
      <div class="otp">${verificationToken}</div>
      <div class="note">(This code is valid for 24 hours)</div>
    </div>
    
    <p>If you did not request this verification, please ignore this email.</p>
    
    <div class="divider"></div>
    
    <p>Cheers,<br>The Team</p>
    
    <div class="footer">
      © ${new Date().getFullYear()} Your Company. All rights reserved.
    </div>
  </div>
</body>
</html>
  `;
};

export const welcomeEmailTemplate = (name, email) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Aboard</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .container {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 30px;
    }
    .header {
      color: #2c3e50;
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
    }
    .greeting {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .message {
      font-size: 16px;
      margin-bottom: 20px;
    }
    .highlight {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 4px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      color: #2c3e50;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #95a5a6;
      text-align: center;
    }
    .divider {
      border-top: 1px solid #e0e0e0;
      margin: 25px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">🎉 Welcome to Our Community 🎉</div>
    
    <div class="greeting">Hello ${name || "User"},</div>
    
    <p class="message">
      We’re excited to have you on board! Your account has been successfully created, with the email address <strong>${email}</strong>. 
      and you are now part of our growing community.
    </p>
    
    <div class="highlight">
      🚀 Start exploring and make the most out of your experience!
    </div>
    
    <p class="message">
      If you have any questions, feel free to reach out to our support team anytime.
    </p>
    
    <div class="divider"></div>
    
    <p>Cheers,<br>The Team</p>
    
    <div class="footer">
      © ${new Date().getFullYear()} Your Company. All rights reserved.
    </div>
  </div>
</body>
</html>
  `;
};
