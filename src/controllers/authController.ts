import { Request, Response } from "express";
import User from "../models/UserModel";
import { generateToken } from "../utils/auth";
import { createUser, findClassName } from "../services/userService";

// פונקציה להרשמה של משתמש חדש
export const register = async (req: Request, res: Response) => {
    const { username, address, email, password, status, className } = req.body;

    try {
        if(req.body.status === "student"){
           const result  = findClassName(req.body.className)
           if(!result){
            res.status(401).json({ message: "הכיתה שבחרת לא נמצאת" })
           }
        }
        const user = await createUser({
            username, address, email, password, status, className
        });
        // אם המשתמש הוא מנהל תייצר לו טוקן
        if (user.status === 'teacher') {
            res.status(201).json({ message: "נרשמת בהצלחה מרצה יקר" })
        } else {
            res.status(201).json({ message: "נרשמת בהצלחה סטודנט יקר " })
        }

    } catch (error) {
        console.log(error);
        res.status(400).json("כ תקלה בהרשמה")
    }
}

// התחברות של משתמש קיים
export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user || !(await user.comparePassword(password))) {
        res.status(401).json({ message: "שם משתמש או סיסמה שגויים" })
        return
    };

    await user.save()

    const token = generateToken(user.id, user.status);
    res.cookie('token', token, {
        httpOnly:true,
        secure: false,
        maxAge: 3600000
    })
    res.status(201).json({ message: "התחברת בהצלחה", token })
}