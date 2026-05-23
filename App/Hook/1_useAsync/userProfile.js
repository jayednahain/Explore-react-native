import React, { useCallback } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import useAsync from './useAsync';

function UserProfile({ userId }) {
  console.log('Rendering UserProfile with userId:', userId);
  // const fetchUser = async () => {
  //   // Simulating: GET https://xyzzy.com/api/users/{userId}
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${userId}`,
  //   );
  //   if (!response.ok) throw new Error('Failed to fetch user');
  //   return response.json();
  // };

  // const fetchUser = useCallback(async () => {
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${userId}`,
  //   );
  //   if (!response.ok) throw new Error('Failed to fetch user');
  //   return response.json();
  // }, [userId]);

  const { execute, status, value: user, error } = useAsync(fetchUser, true);

  console.log('Status:', status);

  if (status === 'pending') return <ActivityIndicator size="large" />;
  if (status === 'error')
    return <Text style={{ color: 'red' }}>{error.message}</Text>;
  if (!user) return <Text>No user found</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Button title="Refresh" onPress={() => execute()} />
    </View>
  );
}

export default UserProfile;
