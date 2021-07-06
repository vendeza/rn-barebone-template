import {action} from "@storybook/addon-actions";
import {storiesOf} from "@storybook/react-native";
import React from "react";
import Card from "./Card";
import ContainerView from "./ContainerView";

storiesOf("Card", module)
    .addDecorator((getStory) => (
        <ContainerView>{getStory()}</ContainerView>
    ))
    .add("isn't touchable", () => (
        <Card onPress={action("clicked-button")} isTouchable/>
    ))
    .add("touchable", () => (
        <Card onPress={action("clicked-button")} title={"Login"}/>
    ))
    .add("without properties", () => <Card/>);
