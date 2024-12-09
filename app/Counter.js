import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCounterValue } from './redux/counterSlice';

function Counter() {
   const count = useSelector(selectCounterValue);
   const dispatch = useDispatch();

   return (
       <View style={styles.container}>
           <Text style={styles.counterText}>{count}</Text>
           <View style={styles.buttonContainer}>
               <Button title="Increment" onPress={() => dispatch(increment())} />
           </View>
           <View style={styles.buttonContainer}>
               <Button title="Decrement" onPress={() => dispatch(decrement())} />
           </View>
       </View>
   );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#f5f5f5',
   },
   counterText: {
       fontSize: 48,
       fontWeight: 'bold',
       marginBottom: 20,
   },
   buttonContainer: {
       marginVertical: 10,
       width: '60%',
   },
});

export default Counter;
