import mongoose, { Schema, Document, Types } from "mongoose";
import { IUser } from "./UserModel";
import { IScore } from "./scoreModel";

export interface IClass extends Document {
    teacher:  IUser["_id"];
    student:  IUser["_id"];
    scores:   IScore["_id"];
}

const ClassSchema = new Schema(
  {
    teacher: {
        type: Schema.Types.ObjectId,
        ref: "teacher",
    },
    student: {
        type: Schema.Types.ObjectId,
      ref: "student",
    },
    scores: {
        type: [Schema.Types.ObjectId],
      ref: "scores",
      },
  },
  { timestamps: true }
);

// מגדיר מאפיין ספציפי בסכסמה כאינדקס
ClassSchema.index({ scores: 1 });

export default mongoose.model<IClass>("Class", ClassSchema);