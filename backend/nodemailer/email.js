import transporter from "./config.js";
import {
  verificationEmailTemplate,
  welcomeEmailTemplate,
} from "./email-templates.js";

export const sendVerificationEmail = async (email, verificationToken, name) => {
  try {
    const mailOptions = {
      from: `"Acme" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Email Address Now",
      html: verificationEmailTemplate(verificationToken, name),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Verification email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending verification email", error);
    throw new Error("Error sending verification email");
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const mailOptions = {
      from: `"Acme" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to our Authentication Service",
      html: welcomeEmailTemplate(name, email), // ✅ fixed order
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Welcome email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending welcome email", error);
    throw new Error("Error sending welcome email");
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const mailOptions = {
      from: `"Acme" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Reset Your Password",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Password Reset Request</h2>
          <p>You recently requested to reset your password. Click the link below to reset it:</p>
          <p><a href="${resetURL}" style=" color: #0000EE; font-weight: bold;">Reset Password</a></p>
          <p>If you did not request this, please ignore this email.</p>
          <hr/>
          <p style="font-size: 12px; color: #95a5a6;">© ${new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Password reset email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending password reset email", error);
    throw new Error("Error sending password reset email");
  }
};

import nodemailer from "nodemailer";

export const sendResetSuccessEmail = async (email) => {
  try {
    const mailOptions = {
      from: `"Acme" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Password Reset Successful",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f7fb; color: #333;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            
            <h2 style="color: #102934; text-align: center;">Password Reset Successful</h2>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Hello, <br><br>
              Your password has been <strong>successfully reset</strong>.  
              You can now log in with your new password.
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.CLIENT_URL}/login" 
                style="background: linear-gradient(90deg, #102934, #122c38); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
                Login Now
              </a>
            </div>

            <p style="font-size: 14px; color: #555; text-align: center;">
              If this wasn’t you, please <a href="${process.env.CLIENT_URL}/contact" style="color: #102934; text-decoration: none;">contact support</a> immediately.
            </p>

          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Password reset success email sent to:", email);
  } catch (error) {
    console.error("❌ Error sending password reset success email:", error);
  }
};
