
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet
} from 'react-native';

import Botao from "./src/components/Botao";
import Visor from "./src/components/Visor";

export default function App() {
    return (
        <SafeAreaView style={ estilos.container }>
            <View style={ estilos.botao }>
                <Botao label="7"/>
                <Botao label="8"/>
                <Botao label="9"/>
                <Botao label="*"/>

                <Botao label="4"/>
                <Botao label="5"/>
                <Botao label="6"/>
                <Botao label="-"/>
                
                <Botao label="1"/>
                <Botao label="2"/>
                <Botao label="3"/>
                <Botao label="+"/>
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex:            1,
        justifyContent:  'center',
        backgroundColor: '#ecf0f1',
        // padding:         8,
    },
    botao:{
        flexDirection:   'row',
        flexWrap:        'wrap',
        backgroundColor: '#900',
    }
});
