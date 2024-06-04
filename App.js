
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet
} from 'react-native';

import Botao from "./src/components/Botao";
import Visor from "./src/components/Visor";

export default function App() {

    adicionarDigito = n => {
        console.warn(`Number: ${n}`)
    }
    
    limparMemoria = () => {
        console.warn("limpando a memória")
    }
    
    setOperacao = () => {
        console.warn("definindo a operação")
    }

    return (
        <SafeAreaView style={ estilos.container }>
            
            <Visor></Visor>

            <View style={ estilos.botao }>
                <Botao label="AC" triplo onClick={limparMemoria}/>
                <Botao label="/" red onClick={setOperacao}/>

                <Botao label="7" onClick={adicionarDigito}/>
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
