import {StyleSheet} from "react-native";
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainText: {
        fontSize: 18,
        textAlign: "center",
        paddingHorizontal: 20,
        paddingVertical: 30,
        lineHeight: 26,
    },
    contentContainer: {
        flex: 1,
    },
    datesListItem: {
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomColor: "#aaa",
        borderBottomWidth: 0.6,
        justifyContent: "center",
        padding: 20,
        width: "100%",
    },
    description: {
        ...commonStyles.p,
        color: colors.white,
        fontSize: 15,
        marginTop: 10,
        textAlign: "center",
    },
    headerTitle: {
        ...commonStyles.h1,
        color: colors.white,
        marginTop: 0,
        textAlign: "center",
    },
    searchFieldsContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors.white,
        padding: 20,
        paddingBottom: 40,
        justifyContent: "center",
    },
    showDatePicker: {
        alignItems: "flex-start",
        backgroundColor: "#f9f9f9",
        borderBottomWidth: 0,
        borderRadius: 10,
        height: 56,
        justifyContent: "center",
        marginBottom: 20,
        paddingLeft: 20,
        width: "100%",
    },
    spinnerTextStyle: {
        color: colors.white,
    },
    topContainerGradient: {
        padding: 60,
        paddingTop: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
