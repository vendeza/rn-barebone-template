import {Platform, StyleSheet} from "react-native";
import colors from "./colors";

const iconContainer = {
    width: 32,
    height: 32,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
};

const commonStyles = StyleSheet.create({
    h1: {
        color: colors.black,
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 28,
        marginBottom: 10,
    },
    h2: {
        fontSize: 22,
        fontWeight: Platform.OS === "android" ? "700" : "600",
        lineHeight: 28,
        marginBottom: 10,
    },
    h3: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: Platform.OS === "android" ? "700" : "600",
        marginBottom: 10,
        marginTop:10,
    },
    h4: {
        color: colors.lightGray,
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 18,
        marginBottom: 10,
    },
    p: {
        color: colors.lightGray,
        fontSize: 16,
        lineHeight: 26,
    },
    blueIconContainer: {
        ...iconContainer,
        backgroundColor: colors.blue,
    },
    breakRow: {
        flexBasis: "100%",
        height: 0,
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    greenIconContainer: {
        ...iconContainer,
        backgroundColor: colors.green,
    },
    iconContainer: {
        ...iconContainer,
    },
    label: {
        fontSize: 12,
        fontWeight: "700",
        textTransform: "uppercase",
    },

    mainContainer: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
        height: "100%",
        padding: Platform.OS === "android" ? 0 : 20,
        paddingTop: Platform.OS === "android" ? 50 : 20,
    },

    orangeIconContainer: {
        ...iconContainer,
        backgroundColor: colors.orange,
    },

    redIconContainer: {
        ...iconContainer,
        backgroundColor: colors.stoutRed,
    },
    subTitle: {
        color: colors.lightGray,
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 22,
    },
    title: {
        alignItems: "flex-end",
        flexDirection: "row",
        marginTop: 20,
    },
});

export default commonStyles;
