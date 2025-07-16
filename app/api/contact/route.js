import nodemailer from "nodemailer";

console.log("USER:", process.env.EMAIL_USER);
console.log("PASS length:", process.env.EMAIL_PASS?.length);
console.log("PASS value:", process.env.EMAIL_PASS);
 

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Please fill in all fields." }),
        { status: 400 }
      );
    }

    // Δημιουργία transporter για Gmail SMTP
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    
    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "e.elehgewrgiou@gmail.com",
//     pass: "ubxcbjzdcakfqzpm", 
//   },
// });


    // Ρυθμίσεις email
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Message from ${name} <${email}>:\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email." }),
      { status: 500 }
    );
  }
}
