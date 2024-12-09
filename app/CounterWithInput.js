import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount, selectCounterValue } from './redux/counterSlice';

export default function CounterWithInput() {
    const count = useSelector(selectCounterValue);
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    // Handle Increment
    const handleIncrement = () => {
        const value = parseInt(inputValue, 10); // Convert input to an integer
        if (!isNaN(value)) {
            dispatch(incrementByAmount(value));
        }
    };

    // Handle Decrement
    const handleDecrement = () => {
        const value = parseInt(inputValue, 10); // Convert input to an integer
        if (!isNaN(value)) {
            dispatch(incrementByAmount(-value));
        }
    };

    return (
        <View style={styles.container}>
           <Text style={styles.counterText}>{count}</Text>
            <Text style={styles.label}>Enter a number:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Type a number"
            />
            <View style={styles.buttonContainer}>
                <Button title="Increment" onPress={handleIncrement} />
                <Button title="Decrement" onPress={handleDecrement} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    counterText: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '80%',
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
});
