import {StyleSheet, Platform} from "react-native";
import colors from "./colors";
import constants from "./constants";

const screenStyles = StyleSheet.create({
    background: {
        backgroundColor: colors.primaryGreen,
        height: "100%",
        justifyContent: "flex-end",
        width: "100%",
    },
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    content: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        paddingBottom: 24,
        paddingHorizontal: 24,
    },
    contentText: {
        alignSelf: "flex-start",
        color: colors.black,
        fontSize: 24,
        letterSpacing: -0.2,
        lineHeight: 28,
        paddingBottom: 20,
        paddingTop: 40,
    },
    flatlistContainer: {
        alignItems: "center",
        height: constants.deviceHeight - 80,
        justifyContent: "center",
        paddingBottom: 24,
        width: constants.deviceWidth,
    },
    foreground: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 24,
    },
    foregroundText: {
        color: colors.white,
    },
    headerWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        //paddingTop: Platform.select({ ios: ifIphoneX(50, 40), android: 55 }),
        width: "100%",
    },
    logo: {
        height: 24,
        width: 142,
    },
    message: {
        color: colors.white,
        fontFamily: "AvertaStd-Semibold",
        fontSize: constants.responsiveWidth(11),
        letterSpacing: -1,
        lineHeight: 48,
    },
    messageContainer: {
        paddingBottom: 24,
        paddingTop: 24,
    },
    profilePic: {
        borderRadius: constants.responsiveWidth(4.5),
        height: constants.responsiveWidth(18),
        width: constants.responsiveWidth(18),
    },
});

export default screenStyles;
