import { validationResult } from 'express-validator'
import UserModuel from '../models/User.js'

export const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array())
    }
    const doc = new UserModuel({
        email: req.body.email,
        fullName: req.body.fullName,
        password: req.body.password
    })

    const user = await doc.save()
    res.json(user)
}