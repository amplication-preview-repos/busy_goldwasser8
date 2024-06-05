import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserListRelationFilter } from "./UserListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  tweets?: TweetListRelationFilter;
  user?: UserWhereUniqueInput;
  username?: StringFilter;
  users?: UserListRelationFilter;
};
