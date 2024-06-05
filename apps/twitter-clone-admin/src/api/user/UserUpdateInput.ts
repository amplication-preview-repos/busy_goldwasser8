import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateManyWithoutUsersInput } from "./UserUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  tweets?: TweetUpdateManyWithoutUsersInput;
  user?: UserWhereUniqueInput | null;
  username?: string;
  users?: UserUpdateManyWithoutUsersInput;
};
