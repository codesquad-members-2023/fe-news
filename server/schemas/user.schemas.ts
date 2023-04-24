import { Schema, model } from 'mongoose';

export interface UserInterface {
  id: string;
  subscribingPressIds: string[];
}

const UserSchema = new Schema<UserInterface>({
  id: { type: String, required: true },
  subscribingPressIds: [{ type: String, required: true }],
});

export const UserModel = model<UserInterface>('Users', UserSchema);
