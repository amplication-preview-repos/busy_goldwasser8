export type Follower = {
  createdAt: Date;
  followedUser: string | null;
  followerUser: string | null;
  id: string;
  updatedAt: Date;
};
