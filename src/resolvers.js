import { Urls } from "./models/Urls";
export const resolvers = {
  Query: {
    urls: () => Urls.find(),
    url: (_, { shortened}) => Urls.findOne({shortened:shortened})
  },
  Mutation: {
    createUrl: async (_, { url ,shortened }) => {
      const CreateUrl = new Urls({ url ,shortened});
      await CreateUrl.save();
      return CreateUrl;
    }
  }
};
