import { StyleSheet } from 'react-native';
import { colors } from '../../constants/theme/colors';

export const styles = StyleSheet.create({
  keybordContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Raleway-Medium',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    marginVertical: 8,
  },
  input: {
    height: 45,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Raleway-Regular',
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  prompt: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  promptButton: {
    width: '100%',
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: 'Raleway-Medium',
    color: colors.text,
  },
});