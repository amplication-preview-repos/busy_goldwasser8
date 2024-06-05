import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FollowerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FollowedUser" source="followedUser" />
        <TextInput label="FollowerUser" source="followerUser" />
      </SimpleForm>
    </Create>
  );
};
