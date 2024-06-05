import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FollowerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="FollowedUser" source="followedUser" />
        <TextInput label="FollowerUser" source="followerUser" />
      </SimpleForm>
    </Edit>
  );
};
