import React, {Component} from 'react'
import { TextInput, View, Text, TouchableOpacity, Image } from 'react-native';

export default class UselessTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            number:'',
            countNumbers:[]
        };
    }

    render() {
        let countNumbers = (Math.ceil(this.state.text.length/this.state.number))
        return (
            <View>
            <TextInput
                style={{height: 100, borderColor: 'gray', borderWidth: 1, width:320}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
<View style ={{flexDirection: 'row'}}>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, width:40, marginTop:30}}
                       onChangeText={(number) => this.setState({number})}
                       value={this.state.number}/>
                       <Text style ={{marginTop:40, marginLeft:20}}>символів</Text>
</View>
                <TouchableOpacity style ={{marginTop:20}} onPress={() => this.setState({countNumbers})}   >
                    <Image source={require('../images/button.png')}/>

                </TouchableOpacity>
                <Text>
                </Text>
                <Text>Потрібно смс:
                <Text>{this.state.countNumbers}</Text>
                </Text>
                </View>


        );

    }

}

