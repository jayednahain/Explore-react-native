import { StyleSheet, View } from 'react-native';
import React from 'react';
import HookUses from './App/Hook';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{}}>
      <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        <HookUses />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
