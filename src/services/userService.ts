import User, { IUser } from "../models/UserModel";


export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
    const user = new User({
        ...userData,
    });

    return await user.save()
};

// לקבל כיתות שכבר נמצאות בדאטה
export const findClassName = async (className: string): Promise<IUser | null> => {
   const classname =  await User.findOne({ className })
    return classname
};

