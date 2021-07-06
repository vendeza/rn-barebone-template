import React, {useState} from "react";
import PropTypes from "prop-types";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import commonStyle from "../styles/commonStyles";

import {Button, Overlay} from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import ButtonCustom from "./ButtonCustom";
import TickerSelectorOverlayWindow from "./TickerSelectorOverlayWindow";
import {getExpirationTimestampsArray} from "../server/api/common";
import Label from "./Label";
import Options from "./Options";

const Settings = ({
    onSaveSettings,
    visible,
    closeWindow,
    filters,
    tickers,
    expirationTimestamps,
    basicInfo,
    tickerStats,
    children,
    resetTempFilter,
}) => {
    const [visibleTickersWindow, setVisibleTickersWindow] = useState(false);
    const [tempFiltersObj, setTempFiltersObj] = useState(filters); //selectedTicker and selected timestamp
    const [expirationTimestampsArray, setExpirationTimestampsArray] = useState(
        expirationTimestamps,
    );
    const [tempBasicInfo, setTempBasicInfo] = useState(basicInfo);
    const [tempTickerStats, setTempTickerStats] = useState({tickerStats});

    const toggleVisibleTickersWindow = () => {
        setVisibleTickersWindow(!visibleTickersWindow);
    };

    const WindowHeader = () => {
        return (
            <View style={styles.settingsContainer}>
                <Text style={{...commonStyle.h1, color: "#fff"}}>
                    {"Settings"}
                </Text>
                <Button
                    onPress={() => {
                        resetTempFilter();
                        closeWindow();
                    }}
                    style={{alignSelf: "flex-end"}}
                    containerStyle={styles.containerButton}
                    type={"clear"}
                    titleStyle={styles.buttonTitle}
                    icon={<Icon name={"x"} color={"#fff"} size={26} />}
                />
            </View>
        );
    };

    /**
     * Get expirationTimestamps array by selected ticker
     * @param {ticker}
     * @return {void}
     * */
    const onPressTickersListItem = async ({item}) => {
        setTempFiltersObj({...tempFiltersObj, selectedTicker: item});
        await getExpirationTimestampsArray(item.symbol, {})
            .then(async (res) => {
                const formattedExpirationTimestamps = await res.expiration_timestamps.map(
                    (item, index) => {
                        return {
                            label: date,
                            value: index,
                            expirationTimestamp: item,
                        };
                    },
                );
                setExpirationTimestampsArray(formattedExpirationTimestamps);
                setTempBasicInfo(res.quote);
                setTempTickerStats(res.ticker_stats);
                return res;
            })
            .catch((error) => console.log(error));
    };

    const RenderTickerSelectionButton = () => {
        return (
            <TouchableOpacity
                onPress={toggleVisibleTickersWindow}
                style={styles.showDatePicker}>
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 18,
                    }}>
                    {tempFiltersObj.selectedTicker
                        ? tempFiltersObj.selectedTicker.full_name
                            ? `${tempFiltersObj.selectedTicker.symbol} - ${tempFiltersObj.selectedTicker.full_name}`
                            : "Select a ticker"
                        : "Selected ticker is empty"}
                </Text>
            </TouchableOpacity>
        );
    };

    const onSelectExpirationTimestamp = (item) => {
        let temp = [...expirationTimestampsArray];
        const i = temp.indexOf(item);
        if (i >= 0) {
            temp[i].checked = !temp[i].checked;
            setExpirationTimestampsArray(temp);
        }
    };

    const SaveButton = () => {
        const selectedExpirationTimestamp = expirationTimestamps.filter(
            (item) => item.checked,
        );
        return (
            <View style={styles.saveButtonContainer}>
                <ButtonCustom
                    onPress={() => {
                        onSaveSettings({
                            expirationTimestampsArray,
                            tempBasicInfo,
                            tempTickerStats,
                            selectedTicker: tempFiltersObj.selectedTicker,
                            selectedExpirationTimestamp: selectedExpirationTimestamp,
                        });
                    }}
                    isGradient
                    title={"Save"}
                    buttonStyle={styles.saveButton}
                />
            </View>
        );
    };
    return (
        <Overlay
            animationType="fade"
            transparent
            isVisible={visible}
            onBackdropPress={closeWindow}
            fullScreen
            overlayStyle={{backgroundColor: "#333741", padding: 0}}>
            <WindowHeader />
            {/**

             Filters

             */}
            <ScrollView
                style={styles.paramsContainer}
                contentContainerStyle={{paddingBottom: 50}}>
                <Label labelText={"TICKER SYMBOL"} />
                <RenderTickerSelectionButton />
                <Label labelText={"Expiration Date"} />
                <Options
                    onSelect={(value) => {
                        onSelectExpirationTimestamp(value);
                    }}
                    options={expirationTimestampsArray}
                />
                {/**

                 Children Filters

                 */}
                {children}
            </ScrollView>
            <SaveButton />
            <TickerSelectorOverlayWindow
                overlayStyle={{zIndex: 10, marginTop: 40}}
                onPressTickersListItem={onPressTickersListItem}
                toggleVisibleTickersWindow={toggleVisibleTickersWindow}
                visibleTickersWindow={visibleTickersWindow}
                tickersArray={tickers}
            />
        </Overlay>
    );
};

Settings.defaultProps = {
    filters: {
        selectedTicker: {},
        selectedExpirationTimestamp: [],
    },
    tickers: [],
    tickersArray: [],
    expirationTimestamps: [],
    closeWindow: () => {},
    visible: false,
    saveExpirationTimestamps: () => {},
    fetchBestTrades: () => {},
    basicInfo: {},
    tickerStats: {},
    resetTempFilter: () => {},
};

Settings.propTypes = {
    filters: PropTypes.object,
    tickers: PropTypes.array,
    tickersArray: PropTypes.array,
    expirationTimestamps: PropTypes.array,
    closeWindow: PropTypes.func,
    visible: PropTypes.bool,
    onSaveSettings: PropTypes.func,
    saveExpirationTimestamps: PropTypes.func,
    fetchBestTrades: PropTypes.func,
    basicInfo: PropTypes.object,
    tickerStats: PropTypes.object,
    resetTempFilter: PropTypes.func,
};
const styles = StyleSheet.create({
    paramsContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    saveButton: {
        marginBottom: 10,
        marginTop: 10,
    },
    saveButtonContainer: {
        backgroundColor: "#282A2F",
        padding: 10,
        paddingBottom: 24,
        width: "100%",
        zIndex: 10,
    },

    settingsContainer: {
        alignItems: "center",
        backgroundColor: "#282A2F",
        flexDirection: "row",
        height: 120,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    showDatePicker: {
        alignItems: "flex-start",
        backgroundColor: "#52555D",
        borderBottomWidth: 0,
        borderRadius: 10,
        color: "#fff",
        height: 56,
        justifyContent: "center",
        marginBottom: 20,
        paddingLeft: 20,
        width: "100%",
    },
});

export default Settings;
