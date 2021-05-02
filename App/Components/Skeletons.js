import React, { Component } from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Styles } from '../Theme/Styles'

export const AsteroidSkeleton = () => {
    return (
        <View style={[Styles.card, Styles.shadow]}>
            <SkeletonPlaceholder>
                <View style={{ height: 20, width: 250, borderRadius: 5, alignSelf: "center" }} />
                {[...Array(2)].map((el, idx) =>
                    <View key={idx} style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginTop: 20, height: 36 }}>
                        <View style={{ height: 12, width: 100, borderRadius: 5 }} />
                        <View style={{ height: 12, width: 200, borderRadius: 5 }} />

                    </View>
                )}
            </SkeletonPlaceholder>
        </View>
    )
}

