import React from "react";
import PropTypes from "prop-types";
import {Text, View, StyleSheet} from "react-native";
import OverlayWindow from "./OverlayWindow";
import CardField from "./CardField";

const StockDetails = ({
    selectedTicker,
    visible,
    toggleOverlay,
    stockDetails,
}) => {
    const showCardFields = () => {
        if (!stockDetails) {
            return null;
        }
        return stockDetails.map((item, index) => {
            return <CardField key={index} {...item} />;
        });
    };

    return (
        <View>
            <OverlayWindow
                title={"StockDetails"}
                visible={visible}
                toggleOverlay={toggleOverlay}>
                <View
                    style={{
                        paddingHorizontal: 0,
                        backgroundColor: "#fff",
                    }}>
                    <Text style={{fontSize: 20}}>
                        {selectedTicker ? selectedTicker.symbol : null}
                    </Text>
                    <Text style={{fontSize: 20}}>
                        {selectedTicker ? selectedTicker.full_name : null}
                    </Text>
                    <View style={styles.positionValues}>
                        {showCardFields()}
                    </View>
                </View>
            </OverlayWindow>
        </View>
    );
};

StockDetails.defaultProps = {
    selectedTicker: {},
    visible: false,
    toggleOverlay: () => {},
    stockDetails: [],
};

StockDetails.propTypes = {
    selectedTicker: PropTypes.object,
    visible: PropTypes.bool,
    toggleOverlay: PropTypes.func,
    stockDetails: PropTypes.array,
};

const styles = StyleSheet.create({
    positionValues: {
        flex: 1,
        flexDirection: "column",
        marginTop: 20,
        padding: 5,
        paddingBottom: 10,
    },
});

export default StockDetails;
