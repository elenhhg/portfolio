import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Παίρνουμε τα δεδομένα από το request
    const { name, email, message } = await req.json();

    // Έλεγχος αν όλα τα πεδία υπάρχουν
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Please fill in all fields." }),
        { status: 400 }
      );
    }

    // Δημιουργία transporter για Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Ρυθμίσεις email
    const mailOptions = {
      from: `"${name}" <${email}>`, // Από τον χρήστη που στέλνει
      to: process.env.EMAIL_USER,   // Το email σου για να λαμβάνεις τα μηνύματα
      subject: `[Portfolio Contact] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Στέλνουμε email
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
