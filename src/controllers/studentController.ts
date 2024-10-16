import { Request, Response } from "express";
import * as userService from "../services/userService"
import User, { IUser } from "../models/UserModel";


export const getScores = async (req: Request, res: Response) => {
    const user = await userService.getAllScore(req.params.id);

    if (!user) {
        res.status(404).json({ messege: "User not found" })
    }

    res.json(user);
};

// מעדכן את המשתמש

export const UpdateStudent = async (req: Request, res: Response) => {
    const user = await userService.UpdateStudentById(req.params.id, req.body)

    if (!user) {
        res.status(404).json({ messege: "User not found" })
    }

    res.json(user)
}
