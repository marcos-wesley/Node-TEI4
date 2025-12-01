const User = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class AuthController {
    
    static login(req, res) {
        res.render('auth/login')
    }

    static register(req, res) {
        res.render('auth/register')
    }

    static async registerPost(req, res) {
        const {name, email, password, confirmpassword} = req.body

        //password match validation
        if(password != confirmpassword) {
            req.flash('message', 'As senhas não conferem, tente novamente!')
            res.render('auth/register')

            return
        }

        //check if user exists

        const checkIfUserExists = await User.findOne({where: {email: email}})

        if (checkIfUserExists) {
            req.flash('message', 'O e-mail já está sendo utilizado!')
            res.render('auth/register')

            return
        }


        // create password

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: hashedPassword
        }

        try {
            await User.create(user)

            //initialize session
            req.session.userid = userid

            req.flash('message', 'Cadastro realizado com sucesso')


            req.session.save(() => {
                res.redirect('/')
            })
        }catch(err) {
            console.log(err)
        }
    }

}