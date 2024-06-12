import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface User {
  name: string;
  avatar: string;
  biography: string;
}

interface UserProfileProps {
  render: (user: User) => ReactNode;
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ render, user }) => {
  return <View>{render(user)}</View>;
};

export default UserProfile;