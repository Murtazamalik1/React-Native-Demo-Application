import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const WorkerGrid = ({ workers, onWorkerSelect }) => {

    const renderWorkerItem = ({ item }) => (
        <TouchableOpacity onPress={() => onWorkerSelect(item.id)}>
            <View style={styles.workerContainer}>
                <Image source={{ uri: item.profileImage }} style={styles.workerImage} />
                <Image source={{ uri: item.countryFlag }} style={styles.flagImage} />
                <Text style={styles.workerName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={workers}
            renderItem={renderWorkerItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={1}
            contentContainerStyle={styles.grid}
        />
    );
};

const styles = StyleSheet.create({
    workerContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    workerImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    flagImage: {
        width: 30,
        height: 20,
        marginTop: 5,
    },
    workerName: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
    },
    grid: {
        padding: 10,
    },
});

export default WorkerGrid;
