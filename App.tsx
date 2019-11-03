import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Facebook from 'expo-facebook';
const FacebookLogin = async () => {
	let FacebookAppId = 'XXXXXXXXXXXXXXXXX';
	try {
		const {
			type,
			token,
			expires
			// permissions,
			// declinedPermissions,
		} = await Facebook.logInWithReadPermissionsAsync(FacebookAppId, {
			permissions: [ 'public_profile' ]
		});
		if (type === 'success') {
			// Get the user's name using Facebook's Graph API
			const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
			console.log('Logged in!', `Hi ${(await response.json()).name}!`);
		} else {
			// type === 'cancel'npm
		}
	} catch ({ message }) {
		alert(`Facebook Login Error: ${message}`);
	}
};

export default function App() {
	return (
		<View style={styles.container}>
			<Button title='Login With Facebook' onPress={() => FacebookLogin()} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
