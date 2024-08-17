import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';
import { initialWorkerData, initialCategoriesData } from '../Json/workerData';
import HeaderSection from '../HeaderSection/HeaderSection';
import WorkerGrid from '../WorkerGrid/WorkerGrid';

const CategoriesScreen = () => {
    const [workers, setWorkers] = useState(initialWorkerData);
    const [filteredWorkers, setFilteredWorkers] = useState(workers);

    const handleSearch = (text) => {
        const filtered = workers.filter(worker => worker.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredWorkers(filtered);
    };

    const handleCategorySelect = (role) => {
        const filtered = workers.filter(worker => worker.role === role);
        setFilteredWorkers(filtered);
    };

    return (
        <View style={{ top: 30 }}>
            <HeaderSection
                categories={initialCategoriesData}
                onSearch={handleSearch}
                onCategorySelect={handleCategorySelect}
            />

            {/* Worker Grid */}
            <WorkerGrid
                workers={filteredWorkers}
                onWorkerSelect={(id) => console.log(id)} // Implement worker selection logic as needed
            />
        </View>
    );
};

export default CategoriesScreen;
