import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    StatusBar,
    StyleSheet,
    View,
    SafeAreaView,
    Animated,
    Text,
    RefreshControl,
    ActivityIndicator,
    Platform,
    TouchableOpacity,
} from "react-native";
import commonStyles from "../styles/commonStyles";
import colors from "../styles/colors";
import StickyParallaxHeader from "../components/StickyParallaxHeader";
import Icon from "react-native-vector-icons/Feather";
import BackButton from "./BackButton";

/** FOR WRAPPING A SCREEN:
 *
 * children: node
 *
 * screenTitle: string
 *
 * onDataRefresh: func
 *
 * refreshing: bool
 *
 * pending: bool
 *
 * containerColor: string
 *
 * isStickyHeader: bool
 *
 * isBackButton: bool
 * */
const ContainerViewWithHeader = (props) => {
    const [state, setState] = useState({ scroll: new Animated.Value(0) });

    useEffect(() => {
        const { scroll } = state;
        if (props.isSticky) {
            scroll.addListener(({ value }) => (this._value = value));
        }

        return () => {
            /** Removing the Listener  */
            const { scroll } = state;
            scroll.removeAllListeners();
        };
    }, []);

    /** For sticky header component (before scrolling) */
    const renderForeground = () => {
        const { scroll } = state;
        const titleOpacity = scroll.interpolate({
            inputRange: [0, 0, 60],
            outputRange: [1, 1, 0],
            extrapolate: "clamp",
        });

        return (
            <Animated.View
                style={{ ...styles.foreground, opacity: titleOpacity }}>
                <View style={{ paddingTop: 64 }}>
                    {props.headerComponent()}
                </View>
            </Animated.View>
        );
    };

    const truncateWithEllipses = (text, max) => {
        return text.substr(0, max - 1) + (text.length > max ? "..." : "");
    };

    const renderHeader = () => {
        const { scroll } = state;
        const opacity = scroll.interpolate({
            inputRange: [0, 10, 40],
            outputRange: [0, 0, 1],
            extrapolate: "clamp",
        });
        return (
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        paddingLeft: 10,
                        backgroundColor: props.headerColor,
                        alignItems: "center",
                        paddingBottom: 10,
                        position: "relative",
                    }}>
                    <View>{renderBackButton()}</View>

                    <Animated.View style={{ opacity, position: "relative" }}>
                        <View
                            style={{
                                ...styles.headerWrapper,
                                backgroundColor: props.headerColor,
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}>
                            <Text
                                style={{
                                    ...styles.headerTitle,
                                    marginLeft: props.isBackButton ? 30 : 0,
                                    textAlign: props.isBackButton
                                        ? "left"
                                        : "center",
                                }}>
                                {truncateWithEllipses(props.screenTitle, 30)}
                            </Text>
                        </View>
                    </Animated.View>
                </View>
                <Animated.View
                    style={{
                        opacity,
                    }}
                />
            </View>
        );
    };

    const renderBackButton = () => {
        if (props.isBackButton) {
            return (
                <BackButton
                    backButtonColor={props.backButtonColor}
                    navigation={props.navigation}
                />
            );
        }

        return null;
    };

    const renderNotStickyContent = () => {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ ...styles.foreground, height: 90 }}>
                    <View>{renderBackButton()}</View>
                    <Text style={styles.h1}>{props.screenTitle}</Text>
                </View>

                {props.children}
            </View>
        );
    };

    /** rendering lists, images, texts and etc. (content)*/
    const renderStickyContent = () => {
        if (props.pending && !props.refreshing) {
            return (
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                    }}>
                    <ActivityIndicator size="large" color="#555" />
                </View>
            );
        }
        return (
            <StickyParallaxHeader
                transparentHeader
                refreshControl={
                    <RefreshControl
                        refreshing={props.refreshing}
                        onRefresh={props.onDataRefresh}
                    />
                }
                foreground={renderForeground()}
                header={renderHeader()}
                parallaxHeight={props.parallaxHeight} //scrollable header
                headerHeight={props.headerHeight}
                snapToEdge={false}
                headerSize={() => {}}
                scrollEvent={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: state.scroll,
                                },
                            },
                        },
                    ],
                    { useNativeDriver: false },
                )}>
                {props.children}
            </StickyParallaxHeader>
        );
    };

    return (
        <>
            <StatusBar
                backgroundColor={props.statusBarColor}
                barStyle={"dark-content"}
                translucent
            />
            <SafeAreaView
                style={{
                    ...commonStyles.mainContainer,
                    backgroundColor: props.containerColor
                        ? props.containerColor
                        : colors.backgroundColor,
                }}>
                <View
                    style={{
                        ...styles.container,
                        paddingTop: Platform.OS === "android" ? 44 : 0,
                        backgroundColor: props.containerColor,
                        ...props.containerStyle,
                    }}>
                    {props.isSticky
                        ? renderStickyContent()
                        : renderNotStickyContent()}
                </View>
            </SafeAreaView>
        </>
    );
};

ContainerViewWithHeader.defaultProps = {
    children: null,
    screenTitle: "Title",
    onDataRefresh: () => {},
    refreshing: false,
    pending: false,
    containerColor: colors.backgroundColor,
    isStickyHeader: true,
    isBackButton: false,
    containerStyle: {},
    statusBarColor: "#fff",
    headerColor: "white",
    isSticky: false,
    navigation: {
        goBack: () => {},
    },
    headerComponent: () => {
        return (
            <View>
                <Text>{"React Native component"}</Text>
            </View>
        );
    },
    parallaxHeight: 200,
    headerHeight: 200,
    backButtonColor: "#333",
};

ContainerViewWithHeader.propTypes = {
    children: PropTypes.node.isRequired,
    screenTitle: PropTypes.string,
    onDataRefresh: PropTypes.func,
    refreshing: PropTypes.bool,
    pending: PropTypes.bool,
    containerColor: PropTypes.string,
    isStickyHeader: PropTypes.bool,
    isBackButton: PropTypes.bool,
    containerStyle: PropTypes.object,
    statusBarColor: PropTypes.string,
    headerColor: PropTypes.string,
    isSticky: PropTypes.bool,
    navigation: PropTypes.object,
    ContainerViewWithHeader: PropTypes.func,
    parallaxHeight: PropTypes.number,
    headerHeight: PropTypes.number,
    backButtonColor: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        ...commonStyles.container,
    },

    foreground: {
        justifyContent: "center",
    },
    h1: {
        color: "black",
        fontSize: 28,
        fontWeight: "700",
        textAlign: "left",
    },
    headerTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
        margin: 0,
        textAlign: "center",
    },
    headerWrapper: {
        backgroundColor: colors.backgroundColor,
        marginLeft: "15%",
        marginTop: 4,
        paddingBottom: 0,
        paddingHorizontal: 16,
        width: "100%",
    },
});
export default ContainerViewWithHeader;
