import mongoose, { Schema, Document, Types } from "mongoose";

export interface IScore extends Document {
  
  
  scores: {
    remark: string;
    score: number;
  };
}

const ScoreSchema = new Schema(
  {
    score_student: {
        remark: {
            type: String,
          },
          score: {
            type: Number,
            required: true,
          },
    }
  },
  { timestamps: true }
);

// מגדיר מאפיין ספציפי בסכסמה כאינדקס
ScoreSchema.index({ score: 1 });

export default mongoose.model<IScore>("Score", ScoreSchema);
