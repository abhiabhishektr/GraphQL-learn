import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import env from '../config/env';

interface RegisterArgs {
  name: string;
  email: string;
  password: string;
}

interface LoginArgs {
  email: string;
  password: string;
}

const userResolvers = {
  Mutation: {
    register: async (_: unknown, { name, email, password }: RegisterArgs): Promise<IUser> => {
      const user = new User({ name, email, password });
      await user.save();
      return user;
    },
    login: async (_: unknown, { email, password }: LoginArgs): Promise<string> => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found');
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error('Invalid Credentials');
      const token = jwt.sign({ id: user.id },env.JWT_SECRET as string);
      return token;
    },
  },
};

export default userResolvers;
