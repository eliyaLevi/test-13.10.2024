import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import { IClass } from "./classModel";
import { IScore } from "./scoreModel";

export interface IUser extends Document {
  username: string;
  address: string;
  email: string;
  password: string;
  status: "teacher" | "student";
  className: string
  cless:  IClass["_id"];
  scores:  IScore["_id"];
  comparePassword(userPassword: string): Promise<boolean>;
}

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "המייל לא תקין"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    status: {
      type: String,
      required: true
    },
    className: {
      type: String,
    },
    class: {
      type: Schema.Types.ObjectId,
      ref: "class",
    },
    scores: {
      type:[ Schema.Types.ObjectId],
      ref: "score",
      defolt: []
    }
  },
  { timestamps: true }
);

// אחראית על הצפנת הסיסמה
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

// השוואה בין הסיסמה שהמשתמש הזין לעומת ההצפנה
UserSchema.methods.comparePassword = async function (
  userPassword: string
): Promise<boolean> {
  return await bcrypt.compare(userPassword, this.password);
};

// מגדיר מאפיין ספציפי בסכסמה כאינדקס
UserSchema.index({ username: 1 });
UserSchema.index({ className: 1 });


export default mongoose.model<IUser>("User", UserSchema);