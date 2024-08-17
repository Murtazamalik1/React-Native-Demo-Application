import React from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const HeaderSection = ({ categories, onSearch, onCategorySelect }) => {
    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity onPress={() => onCategorySelect(item.Worker_Role)}>
            <View style={styles.categoryContainer}>
                <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
                <Text style={styles.categoryText}>{item.Worker_Role}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.headerContainer}>
            {/* Search Bar */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                onChangeText={onSearch}
            />

            {/* Categories FlatList */}
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.carouselContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    carouselContainer: {
        paddingHorizontal: 10, // Adjust padding as needed
    },
    categoryContainer: {
        alignItems: 'center',
        marginRight: 15,
    },
    categoryIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    categoryText: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
    },
});

export default HeaderSection;
