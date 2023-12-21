const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

class UserController
{
    async registration(req, res, next){
        const {email, password} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Ivalid data'))
        }

        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest('This user already exist'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token =  jwt.sign({id: user.id, email: user.email}, 'random', {expiresIn: '24h'})
        return res.json(token)
    }

    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user)
        {
            return next(ApiError.internal('There is not such user'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword)
        {
            return next(ApiError.internal('Invalid password'));
        }
        const token = jwt.sign({id: user.id, email: user.email}, 'random', {expiresIn: '24h'})
        return res.json(token)
    }

    async check(req, res, next )
    {
        const token = jwt.sign({id: user.id, email: user.email}, 'random', {expiresIn: '24h'})
        return res.json(token)
    }
}

module.exports = new UserController()