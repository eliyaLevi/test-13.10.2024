import User, { IUser } from "../models/UserModel";


export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
    const user = new User({
        ...userData,
    });

    return await user.save()
};

export const UpdateScoreById = async (id: string, updateData: Partial<IUser>): Promise<IUser | null> => {
    return await User.findByIdAndUpdate(id, updateData, { new: true }).select("-password")
};

// לקבל משתמש לפי ID
export const getAllScore = async (id: string): Promise<IUser | null> => {
    return await User.findById(id).select("-password").populate("class")
};

// לקבל כיתות שכבר נמצאות בדאטה
export const findClassName = async (className: string): Promise<IUser | null> => {
   const classname =  await User.findOne({ className })
    return classname
};



