import { IBlog } from '../models/Blog';
import Blog from '../models/Blog';
import { IUser } from '../models/User';

interface CreateBlogArgs {
  title: string;
  content: string;
}

const blogResolvers = {
  Query: {
    getAllBlogs: async (): Promise<IBlog[]> => await Blog.find().populate('author'),
    getBlog: async (_: unknown, { id }: { id: string }): Promise<IBlog | null> =>
      await Blog.findById(id).populate('author'),
  },
  Mutation: {
    createBlog: async (_: unknown, { title, content }: CreateBlogArgs, { user }: { user: IUser }) => {
      if (!user) throw new Error('Not Authenticated');
      const newBlog = new Blog({ title, content, author: user.id });
      return await newBlog.save();
    },
  },
};

export default blogResolvers;
