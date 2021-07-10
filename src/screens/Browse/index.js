import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {
    Card,
    CardField,
    ContainerView,
    Header,
    InputCustom,
    Label,
} from "../../components";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getCars} from "../../server/api/cars";
import commonStyles from "../../styles/commonStyles";
import Icon from "react-native-vector-icons/Feather";

const Browse = () => {
    return (
        <View style={{flex: 1}}>
            <ContainerView>
                <Text style={commonStyles.h1}>{"Browse screen"}</Text>
                <Text style={commonStyles.h3}>
                    {
                        "You can use components of react-native-elements to create the user interface. Also the project contains custom components."
                    }
                </Text>
                <Card onPress={() => alert(`You've pressed the card element`)}>
                    <Text style={commonStyles.p}>{"Card element"}</Text>
                    <CardField label={"Label card"} value={0} />
                </Card>

                <InputCustom defaultValue={"Input custom"} />
                <Label labelText={"Label text"} tooltipText={"Tooltip text"} />
                <Header
                    title={"Custom header"}
                    centerComponent={
                        <Text style={{...commonStyles.h3, marginBottom: 0}}>
                            {"Custom header"}
                        </Text>
                    }
                    rightComponent={
                        <TouchableOpacity onPress={() => {}}>
                            <Icon name={"share"} size={30} />
                        </TouchableOpacity>
                    }
                />
            </ContainerView>
        </View>
    );
};

const mapStateToProps = (state) => {
    const {browseReducer} = state;
    return {
        exampleValue: browseReducer.exampleValue,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getCars: getCars,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
