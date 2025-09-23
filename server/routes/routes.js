import express from "express"
import googleLogin from "../controllers/auth.js"
import addNote from "../controllers/crud.js"

const router = express.Router()

router.post('/notes-app/auth/google', googleLogin)

router.post('/addNote', addNote)

export default router