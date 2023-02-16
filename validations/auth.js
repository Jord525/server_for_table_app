import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'неверный формат почты').isEmail(),
    body('password', 'пароль должен быть минимум 5 символов').isLength({ min: 5 }),
    body('fullName', 'укажите имя').isLength({ min: 3 }),
]