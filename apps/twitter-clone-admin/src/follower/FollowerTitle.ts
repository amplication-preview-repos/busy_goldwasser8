import { Follower as TFollower } from "../api/follower/Follower";

export const FOLLOWER_TITLE_FIELD = "followedUser";

export const FollowerTitle = (record: TFollower): string => {
  return record.followedUser?.toString() || String(record.id);
};
