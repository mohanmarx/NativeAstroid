import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { SearchAstroid } from '../../Store/Redux/AstroidAction'

//Styles
import { Styles } from '../../Theme/Styles'


export class AstroidSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            astroid: ""
        }
    }

    handleInput = (astroid) => {
        this.setState({ astroid })
    }

    handleSearch = async (key) => {
        const { astroid } = this.state
        const { SearchAstroid, navigation } = this.props
        SearchAstroid(key, astroid)
        navigation.navigate("Astroid")
    }

    render() {
        const { astroid } = this.state
        return (
            <View style={Styles.container}>
                <TextInput
                    testID={'searchBox'}
                    value={astroid}
                    onChangeText={(text) => this.handleInput(text)}
                    style={Styles.TextInput}
                    placeholder={'Enter Asteroid ID'}
                />
                <TouchableOpacity onPress={() => astroid.toString().length > 0 && this.handleSearch("search")} style={[Styles.btnPrimary, Styles.mt40]} >
                    <Text>Search Asteroid</Text>
                </TouchableOpacity>
                <TouchableOpacity testID="random" onPress={() => this.handleSearch("random")} style={[Styles.btnPrimary, { marginTop: 20 }]} >
                    <Text>Random Asteroid</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(null, { SearchAstroid })(AstroidSearch)

