import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client();

const ticket = await client.verifyIdToken({
  idToken: req.body.id_token,
  audience: process.env.CLIENT_ID,
});

const payload = ticket.getPayload();

const googleLogin = async (req, res) => {
  console.log(req.body);
  
  res.json({ message : "success" })
}

export default googleLogin