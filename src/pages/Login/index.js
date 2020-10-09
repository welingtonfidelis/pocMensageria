import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import TextInput from '../../components/TextInput'
import ButtonPrimary from '../../components/ButtonPrimary';

import api from '../../services/api';
import alert from '../../services/alert';

import styles from './styles';

import logo from '../../assets/images/logo-tech4h.png';

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const apiClient = api.client();

    const [load, setLoad] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [slug, setSlug] = useState('');

    const handleLogin = async () => {
        setLoad(true);
        try {
            const { data } = await apiClient.post(
                'security/user/login',
                { slug, email, password }
            );

            const { company, Authorization, user } = data.data;
            dispatch({ 
                type: 'UPDATE_USER', 
                user: { 
                    company, name: user.name, token: Authorization, 
                    signalr: user.signalr, urlAvatar: user.url_avatar 
                } 
            });

            navigation.navigate('agentarea');
            setLoad(false);
            return;
        }
        catch (error) {
            console.log(error);
            alert.errorInform(
                'Ops!', 
                'Houve um erro ao tentar efetuar seu login. Verifique os dados inseridos e tente novamente.'
            );
        }
        setLoad(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTextTitle}>Seja bem vindo/a!</Text>

                <Text style={styles.headerTextSubTitle}>
                    Insira seu usuário e senha abaixo para começarmos.
                </Text>

                <Image source={logo} style={styles.imageLogo} />
            </View>
            <View style={styles.body}>
                <View style={styles.contentSlug}>
                    <TextInput
                        label="Domínio/nome da empresa"
                        autoCapitalize="none"
                        value={slug}
                        onChangeText={text => setSlug(text)}
                    />
                </View>

                <TextInput
                    label="E-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Senha"
                    type="password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <View style={styles.contentButton}>
                    <ButtonPrimary 
                        label="Entrar" 
                        load={load} 
                        onPress={handleLogin}
                    />
                </View>
            </View>

            <View style={styles.contentFooter}>
                <Text style={styles.footerText}>© 2020 Tech4humans.</Text>
            </View>
        </View>
    )
}