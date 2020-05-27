import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";


export const HeaderText=()=>{
return(
    <Text style={styles.header}>Weather Forecast App</Text>

)
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        width: "100%",
        height:30,
        justifyContent: 'center',
        alignItems: "center",
        textAlign: 'center',
      }
}
)
