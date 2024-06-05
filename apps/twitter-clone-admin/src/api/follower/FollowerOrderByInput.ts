import { SortOrder } from "../../util/SortOrder";

export type FollowerOrderByInput = {
  createdAt?: SortOrder;
  followedUser?: SortOrder;
  followerUser?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
