import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, openWebLink } from 'react-native';

export default function App() {

  const openWebLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error(`Cannot open URL: ${url}`);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  }
  
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/userimage.jpg')}
        style={styles.image}
      />
      <Text style={styles.textStyle}>OTUYEMI EMMANUEL</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button}
        onPress={() => {
          const url = 'https://www.facebook.com';
          openWebLink(url);
        }}
        >
        <Text style={styles.subText}>Open Github</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#285EA7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 2,
  },
  button: {
    borderColor: '#fff',
    borderCurve: 5,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  subText: {
    color: '#fff'
  }
});
