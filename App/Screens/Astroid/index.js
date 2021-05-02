import React, { Component } from 'react'
import { Text, View, BackHandler } from 'react-native'

import { connect } from 'react-redux'

import { AsteroidSkeleton } from '../../Components/Skeletons'
import { Styles } from '../../Theme/Styles'
import { SearchAstroid } from '../../Store/Redux/AstroidAction'

export class Astroid extends Component {
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    backAction = () => {
        const { SearchAstroid } = this.props
        SearchAstroid("clear")
    }

    render() {
        const { astroid, isFetching } = this.props
        return (
            <View style={[Styles.container, { paddingHorizontal: 15, justifyContent: "flex-start" }]}>
                {
                    isFetching ? <AsteroidSkeleton /> :
                        Object.keys(astroid).length > 0 ?
                            <View style={[Styles.card, Styles.shadow]}>
                                <Text style={Styles.astroid}>{astroid.name}</Text>
                                <View style={Styles.alignCol}>
                                    <Text style={Styles.colHead}>Nasa jpl url</Text>
                                    <Text style={Styles.colContent}>{astroid.nasa_jpl_url}</Text>
                                </View>
                                <View style={Styles.alignCol}>
                                    <Text style={Styles.colHead}>Hazardous</Text>
                                    <Text style={Styles.colContent}>{astroid.is_potentially_hazardous_asteroid}</Text>
                                </View>
                            </View>
                            : <View style={Styles.alignCol}>
                                <Text style={Styles.notfound}>Sorry no astroid found for your search query </Text>
                                <Text style={Styles.colHead}>{astroid}</Text>
                            </View>}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    astroid: state.astroidState.astroid,
    isFetching: state.astroidState.isFetching,
})
export default connect(mapStateToProps, { SearchAstroid })(Astroid)