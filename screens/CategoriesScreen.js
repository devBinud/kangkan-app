import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoriesScreen = () => {
  return (
    <SafeAreaView>
      <View>
      <Text style={{fontWeight:"bold"}}>Categories Screen</Text>
      <Text>
         Update the Category Screen in Github and check again in your repository
      </Text>
    </View>
    </SafeAreaView>

  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})