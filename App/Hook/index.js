import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserProfile from './1_useAsync/userProfile';

export default function HookUses() {
  return (
    <View style={{}}>
      {/* UseAsync */}
      <UserProfile userId={1} />
    </View>
  );
}

const styles = StyleSheet.create({});
