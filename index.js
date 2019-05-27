/**
 * @format
 */

// Import
import React, { useState }  from 'react'
import { AppRegistry, Text, View, TouchableOpacity } from 'react-native'

// Create a component
const App = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={ {justifyContent: 'center', alignItems: 'center', flex: 1} }>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text style={ {fontSize:30} }> Click me {count} times </Text>
            </TouchableOpacity>
        </View>
    )
}

// Render it to the device
AppRegistry.registerComponent('intro2Hooks', () => App)
