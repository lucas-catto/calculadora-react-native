
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
                <Botao label="AC" triplo/>
                <Botao label="/" red/>

                <Botao label="7"/>
                <Botao label="8"/>
                <Botao label="9"/>
                <Botao label="*" red/>

                <Botao label="4"/>
                <Botao label="5"/>
                <Botao label="6"/>
                <Botao label="-" red/>
                
                <Botao label="1"/>
                <Botao label="2"/>
                <Botao label="3"/>
                <Botao label="+" red/>
                
                <Botao label="0" dobro/>
                <Botao label="."/>
                <Botao label="=" red/>

            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex:            1,
        justifyContent:  'flex-end',
        // alignItems: 'flex-end',

        backgroundColor: '#ecf0f1',
        // padding:         8,
    },
    botao:{
        flexDirection:   'row',
        flexWrap:        'wrap',
        backgroundColor: '#900',
    }
});
