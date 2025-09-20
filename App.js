import React from 'react';
import { SafeAreaView } from 'react-native';
import CommentSection from './CommentSection.js';
import ChatScreen from './ChatScreen.js';


const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommentSection  />
            <ChatScreen />
        </SafeAreaView>
    );
};

export default App;