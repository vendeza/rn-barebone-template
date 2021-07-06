import React, {useState} from "react";
import {Platform, ScrollView, StyleSheet, Text, View} from "react-native";
import {ButtonCustom, ContainerView, CustomCheckbox, Error} from "./";
import colors from "../styles/colors";
import Spinner from "react-native-loading-spinner-overlay";
import commonStyles from "../styles/commonStyles";
import {Divider} from "react-native-elements";
import {connect} from "react-redux";

const SelectExpirationDates = ({
                                   navigationToSearchResult,
                                   expirationTimestamps,
                                   fetchEntities,
                                   basicInfo,
                                   filters,
                                   pending,
                                   user,
                                   error,
                               }) => {
    const [selectedExpirationDates, setSelectedExpirationDates] = useState(
        expirationTimestamps,
    );

    const onSelectTimestamp = (item) => {
        let temp = [...selectedExpirationDates];
        const i = temp.indexOf(item);
        if (i >= 0) {
            temp[i].checked = !temp[i].checked;
            setSelectedExpirationDates([...temp]);
        }
    };

    const isSelectedExpirationDates = () => {
        if (!selectedExpirationDates || selectedExpirationDates.length === 0) {
            return false;
        }

        return selectedExpirationDates.some((item) => {
            return item.checked === true;
        });
    };
    const onSearch = async () => {
        let selectedExpirationTimestamps = [];
        selectedExpirationDates.forEach((item) => {
            if (item.checked) {
                selectedExpirationTimestamps.push(item);
            }
        });
        let headers = {};
        if (user.access_token) {
            headers = {Authorization: `Bearer ${user.access_token}`};
        }

        await fetchEntities({
            headers,
            filters: {
                ...filters,
                selectedTicker: filters.selectedTicker,
                selectedExpirationTimestamp: selectedExpirationTimestamps,
                ...{maxStrike: basicInfo.regularMarketPrice * 2 || 0},
            },
        });

        navigationToSearchResult();
    };

    const SearchButton = () => {
        return (
            <View style={{padding: 20}}>
                <ButtonCustom
                    disabled={!isSelectedExpirationDates()}
                    buttonStyle={{
                        marginTop: 20,
                        backgroundColor: colors.black,
                    }}
                    title={"Search"}
                    onPress={() => {
                        onSearch();
                    }}
                />
            </View>
        );
    };

    const ExpirationDatesList = () => {
        return selectedExpirationDates.map((item, index) => (
            <View
                key={index}
                style={{
                    borderBottomColor: "#E5E5E5",
                    borderBottomWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                <CustomCheckbox
                    label={item.label}
                    checked={item.checked}
                    setChecked={() => {
                        onSelectTimestamp(item);
                    }}
                />
            </View>
        ));
    };

    return (
        <View
            style={{
                flex: 1,
            }}>
            <ContainerView
                statusBarColor={"#fff"}
                containerColor={"#fff"}
                containerStyle={{
                    padding: 0,
                }}>
                <View
                    style={{
                        ...styles.container,
                        backgroundColor: "#fff",
                    }}
                    contentContainerStyle={styles.contentContainer}
                    keyboardShouldPersistTaps="handled">
                    <Text
                        style={{
                            ...styles.label,
                            ...commonStyles.label,
                        }}>
                        {"Select from available exp dates below"}
                    </Text>
                    <Divider/>
                    <ScrollView
                        style={{flex: 1, ...styles.searchFieldsContainer}}>
                        <ExpirationDatesList/>
                    </ScrollView>
                    <SearchButton/>
                </View>
            </ContainerView>

            {/** Overlays */}
            <Spinner
                visible={pending}
                textContent={"Loading..."}
                textStyle={styles.spinnerTextStyle}
            />
            <Error style={{marginBottom: 10}} error={error}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    contentContainer: {
        flex: 1,
    },
    label: {
        paddingVertical: Platform.OS === "ios" ? 40 : 20,
    },
    searchFieldsContainer: {
        backgroundColor: colors.white,
        paddingBottom: 40,
    },

    spinnerTextStyle: {
        color: colors.white,
    },
});

const mapStateToProps = (state) => {
    const {mainReducer} = state;
    return {
        user: mainReducer.user,
    };
};

export default connect(mapStateToProps)(SelectExpirationDates);
