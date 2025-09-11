import express from "express"
import googleLogin from "../controllers/controllers.js"

const router = express.Router()

router.post('/notes-app/auth/google', googleLogin)

export default router