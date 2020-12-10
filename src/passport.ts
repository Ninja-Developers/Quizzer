import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserDao } from './user';
import { User } from './user/user';
import {ExtractJwt, Strategy as JwtStrategy} from 'passport-jwt'
import * as dotenv from 'dotenv';
dotenv.config();

const userDao = new UserDao();

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, done) => {
    try {
        let user: User = await userDao.find(username);

        let isPasswordSame = await user.verifyPassword(password);

        if (isPasswordSame !== true) {
            return done(null, false);
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }

}));


passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, (payload, done) => {
    /**
     * Here we recieve the parsed jwt payload
     * and check if the user is present in the database.
     */
}))