import { Request, Response } from "express";
import * as userService from "../services/userService"
import User, { IUser } from "../models/UserModel";
import Score, {IScore} from "../models/scoreModel"


// מעדכן את המשתמש

export const UpdateScore = async (req: Request, res: Response) => {
    const user = await userService.UpdateScoreById(req.params.id, req.body)

    if (!user) {
        res.status(404).json({ messege: "User not found" })
    }

    res.json(user)
}
