import UserCard from '@/components/UserCard';
import UserProfile from '@/components/UserProfile';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const user = {
  name: 'John Doe',
  avatar: 'https://via.placeholder.com/150',
  biography: 'John is a software engineer with a passion for building scalable applications.'
};

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserProfile
        user={user}
        render={(user) => <UserCard user={user} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;