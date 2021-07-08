import {action} from "@storybook/addon-actions";
import {storiesOf} from "@storybook/react-native";
import React, {useState} from "react";
import {View, Button} from "react-native";
import OverlayWindow from "./OverlayWindow";
import ContainerView from "./ContainerView";

storiesOf("OverlayWindow", module)
    .addDecorator((getStory) => <ContainerView>{getStory()}</ContainerView>)
    .add("with title", (state, setState) => (
        <View style={{marginBottom: 210}}>
            <OverlayWindow
                visible={true}
                onPress={action("clicked-button")}
                title={"Rewards"}
            />
        </View>
    ))
    .add("without properties", () => <OverlayWindow />);
