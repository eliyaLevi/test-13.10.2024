import mongoose, { Schema, Document, Types } from "mongoose";
import { IUser } from "./UserModel";
import { IScore } from "./scoreModel";

export interface IClass extends Document {
    scores:   IScore["_id"];
    user:  IUser["_id"];   
}

const ClassSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
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