import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNumber, selectCounterValue } from './redux/counterSlice';

function GetValue() {
    const count = useSelector(selectCounterValue);
    const { isLoading, error } = useSelector(state => state.counter);

    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>{count}</Text>
            { isLoading && <Text style={styles.counterText}>Loading...</Text>}
            {!isLoading &&
                <View style={styles.buttonContainer}>
                    <Button title="Get Value through API" onPress={() => dispatch(fetchNumber())} />
                </View>
            }
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

export default GetValue;
