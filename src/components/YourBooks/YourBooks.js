import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import ListYourBooks from "./ListYourBooks";
import ListYourFavoritesBooks from "./ListYourFavoritesBooks";
import colors from "../../styles/colors";

export default function YouBooks() {
    const [pantalla, setPantalla] = useState(true);

    return (
        <>
            <View>
                <View style={styles.Navbuttons}>
                    <Button
                        uppercase={false}
                        color={pantalla? "" : colors.accent}
                        mode={pantalla? "contained" : "outlined"}
                        style={
                            pantalla ? styles.btnSelect : styles.btn
                        }
                        onPress={() => setPantalla(true)}
                    >
                        Todos
                    </Button>
                    <Button
                        uppercase={false}
                        mode={!pantalla? "contained" : "outlined"}
                        color={!pantalla? "" : colors.accent}
                        style={
                            !pantalla? styles.btnSelect : styles.btn
                        }
                        onPress={() => setPantalla(false)}
                    >
                        Favoritos
                    </Button>
                </View>
                {pantalla === true ? (
                    <ListYourBooks />
                ) : (
                    <ListYourFavoritesBooks />
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    Navbuttons: {
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 10,
        marginBottom: 10,
    },
    buttons: {
        padding: 3,
    },
    btn: {
        borderColor: colors.accent,
        marginLeft: 10
    },
    btnSelect: {
        backgroundColor: colors.accent,
    },
});
