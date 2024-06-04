
import {
    View,
    Text,
    StyleSheet
} from "react-native";

export default props => {
    return (
        <View style={ estilos.visor }>
            <Text style={estilos.valorVisor}>...</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    visor: {
        padding:         20,
        flex:            1,
        justifyContent:  'center',
        alignItems:      'flex-end',
        backgroundColor: 'rgba(0,0,0, .6)',
    },
    valorVisor: {
        fontSize: 60,
        color:    '#fff'
    },
});
