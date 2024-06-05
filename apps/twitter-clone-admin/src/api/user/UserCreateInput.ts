import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetCreateNestedManyWithoutUsersInput } from "./TweetCreateNestedManyWithoutUsersInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserCreateNestedManyWithoutUsersInput } from "./UserCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  tweets?: TweetCreateNestedManyWithoutUsersInput;
  user?: UserWhereUniqueInput | null;
  username: string;
  users?: UserCreateNestedManyWithoutUsersInput;
};
