import { StyleSheet, Text, View } from 'react-native';

export default function HubScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hub</Text>
      <Text style={styles.subtitle}>Everything else lives here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F10',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#A0A0A5',
    fontSize: 16,
    marginTop: 8,
  },
});
