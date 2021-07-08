import {action} from "@storybook/addon-actions";
import {storiesOf} from "@storybook/react-native";
import React from "react";
import TextInputCustom from "./TextInputCustom";
import ContainerView from "./ContainerView";

storiesOf("TextInputCustom", module)
    .addDecorator((getStory) => <ContainerView>{getStory()}</ContainerView>)
    .add("with title", () => (
        <TextInputCustom
            placeholder={"First name"}
            onPress={action("clicked-button")}
            title={"Rewards"}
        />
    ))
    .add("without properties", () => <TextInputCustom />);
