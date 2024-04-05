import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext, ThemeProvider } from './Contexts/ThemeContext';
import { useContext } from 'react';

const MainApp: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reac Native Expo Theme Scheme</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const getStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: theme.text,
    },
  });
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;
