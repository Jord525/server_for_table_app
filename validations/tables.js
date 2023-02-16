import { body } from 'express-validator'

export const tablesValidation = [
    body('productName', 'неверный формат почты').isString(),
    body('quantity', 'пароль должен быть минимум 5 символов').isString(),
    body('weight', 'укажите имя').isString(),
    body('purchasePrice', 'укажите имя').isString(),
    body('sellingPrice', 'укажите имя').isString(),
]