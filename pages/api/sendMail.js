// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");


export default async function handler(req, res) {
  const {email} = req.body;
  const client = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "marchaprogram@gmail.com",
        pass: "ngvijxbckplmwncd"
    }
  });

  let message = {
          from: '"Marketing Challengers Season 11" <marchaprogram@gmail.com>',
          to: email,
          subject: "[Marketing Challengers Season 11] REGISTRATION CONFIRMATION",
          html: `
          <p>Dear our beloved participant,</p>
          <br/>
          <p>To begin, we would like to convey our sincere gratitude and appreciation for your interest in <span style="color: red; "><strong>MARKETING CHALLENGERS SEASON 11</strong></span>.</p>
          <br/>
          <p>Please use the competition account you have just created to login the below link and get the detailed information about your assigned time slot for the online test in Round 1:
          </p>
          <a href="https://round1.marketingchallengers.org/login" target="_blank">Round 1 Online Assessment Dashboard</a>
          <br/>
          <br/>
          <p>Before Round 1 begins, we have plenty of exclusive information and updates that we would like to share with you - our valuable participant. If you are interested to find out more about us, please visit us at the below platforms:</p>
          <p>Website: <a href="https://www.marketingchallengers.org/" rel="noreferrer" target="_blank">https://www.marketingchallengers.org </a> </p>
          <p>Facebook Group: <a href="https://www.facebook.com/groups/marketingchallengers/?ref=share" rel="noreferrer" target="_blank">https://www.facebook.com/groups/marketingchallengers/?ref=share </a> </p>
          <p>TikTok: <a href="https://www.tiktok.com/@marketingchallengers" rel="noreferrer" target="_blank">https://www.tiktok.com/@marketingchallengers </a></p>
          <br/>
          <p>If you have any further issues or questions about the competition that you would like to ask us, please feel free to contact us via:</p>
          <p>Email: rmitbcmarketingchallengers@gmail.com</p>
          <p>Facebook: <a href="https://www.facebook.com/marketing.challengers" rel="noreferrer" target="_blank">https://www.facebook.com/marketing.challengers</a> </p>
          <br/>
          <p>Thanks & Best Regards,</p>
          <p>Marketing Challengers Season 11 Organizing Team.</p>

          `
      }

  try {
      let info = await client.sendMail(message)
      res.status(200).json({ msg: `Sent successfully! ${info.messageId}` })
  } catch (error) {
      res.status(201).json({msg: 'Cannot send email.'})
  }

  
  
}
