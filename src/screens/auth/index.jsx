import {Button, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { signIn, signUp } from '../../store/actions/auth.action';

import { colors } from '../../constants/theme/colors';
import {styles} from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Auth=({navigation})=>{
    const dispatch=useDispatch();
    const [isLogin,setIsLogin]=useState(true);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const title =isLogin ? 'Login' : 'Register';
    const message= isLogin ? 'Don\'t have an account?' : 'Already have an account';
    const messageButton= isLogin ? 'Login' : 'Register';
    


    const onHandlerSubmit=() =>{
        dispatch(isLogin ? signIn(email,password): signUp(email,password))
        

    }
    return(
        <KeyboardAvoidingView style={styles.keybordContainer} behavior={Platform.OS === 'android' ? 'height': 'padding'}>
        <View style={styles.container}>
            
            <View style={styles.content}>
             <Text style={styles.title}> {title}</Text>
             <Text style={styles.label}> Email</Text>
             <TextInput 
                        style={styles.input} 
                        placeholder='insert email here' 
                        placeholderTextColor={colors.gray}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text)=> setEmail(text)}
                        value={email}
                        
                />
            <Text style={styles.label}> Password</Text>
             <TextInput 
                        style={styles.input} 
                        placeholder='insert password here' 
                        placeholderTextColor={colors.gray}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text)=> setPassword(text)}
                        value={password}
                        
                        
                />
            <View style={styles.buttonContainer}>
            <Button title={messageButton} color={colors.primary} onPress={onHandlerSubmit}/>
            <View style={styles.prompt}>

            <TouchableOpacity style={styles.promptButton} onPress={()=>setIsLogin(!isLogin)}>
            <Text style={styles.promptMessage}> {message}</Text>
                
            </TouchableOpacity>
            </View>
            </View>
        </View>

            


        </View>
        </KeyboardAvoidingView>
    );
};

export default Auth;