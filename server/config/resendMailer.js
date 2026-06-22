import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (mailOptions) => {
  try {
    const response = await resend.emails.send({
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      text: mailOptions.text,
      html: mailOptions.html, // optional
    });

    return response;
  } catch (error) {
    console.log("Email Error:", error);
    throw error;
  }
};

export default sendMail;