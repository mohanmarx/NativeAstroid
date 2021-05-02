import * as React from "react"
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    mt40: {
        marginTop: 40
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    TextInput: {
        width: "86%",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#ddd"
    },
    btnPrimary: {
        backgroundColor: "rgba(151, 235, 244, .5)",
        width: "60%",
        paddingVertical: 15,
        alignItems: "center",
        borderRadius: 10
    },
    shadow: {
        shadowOffset: { height: 2 },
        shadowOpacity: 0.2,
        elevation: 5,
        shadowColor: '#D7D7D7'
    },
    card: {
        backgroundColor: "#fff",
        width: "100%",
        marginVertical: 15,
        borderRadius: 10,
        padding: 15,
        flexShrink: 1
    },
    astroid: {
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 30,
        textTransform: "capitalize",
        textAlign: "center"
    },
    alignCol: {
        marginTop: 20,
        alignItems: "center"
    },
    colHead: {
        fontSize: 16,
        lineHeight: 16,
        marginBottom: 8,
        textTransform: "capitalize",
        textDecorationLine: "underline"
    },
    colContent: {
        fontSize: 13,
        lineHeight: 13,
        textTransform: "capitalize"
    },
    notfound:{
        fontSize: 16,
        lineHeight: 16,
        marginBottom: 8,
        textTransform: "capitalize",
    }
})