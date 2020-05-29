import React from "react";
import { StyleSheet, Text} from "react-native";


export const HeaderText=()=>{
return(
    <Text style={styles.header}>Weather Fowwrecast App</Text>
)
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        fontSize: 20,
        fontFamily: "sans-serif-light",
        width: "100%",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 30,
      }
}
)
