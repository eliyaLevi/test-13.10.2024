import jwt from 'jsonwebtoken';

export const generateToken = (userId: string, status:string): string => {
    return jwt.sign({userId, status}, process.env.JWT_SECRET as string, {expiresIn: '10h'})
}