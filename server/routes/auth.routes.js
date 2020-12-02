const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')

const users = [
    {
        email: 'admin@email.com',
        password: 'admin',
        userId: 1
    }
]

const accessTokenSecret = 'youraccesstokensecret'

router.post(
    '/login', (req, res) => {
        try {
            const { email, password } = req.body
            const user = users.find(u => { return u.email === email && u.password === password })
            console.log(user)
            if (user) {
                const accessToken = jwt.sign({ email: user.email }, accessTokenSecret)
                res.json({
                    accessToken, userId: user.userId
                })
            } else {
                console.log(res.status(400))
               return  res.status(400).json({message:'Username or password incorrect'})
            }
        }
        catch {
            res.status(500).json({ message: 'Error 500'})
        }
    })

module.exports = router