import {action} from "@storybook/addon-actions";
import {storiesOf} from "@storybook/react-native";
import React from "react";
import ButtonCustom from "./ButtonCustom";
import ContainerView from "./ContainerView";
import colors from "../styles/colors";

storiesOf("ButtonCustom", module)
    .addDecorator((getStory) => (
        <ContainerView containerColor={"#fff"}>{getStory()}</ContainerView>
    ))
    .add("custom", () => (
        <ButtonCustom
            title={"Sign In with Email"}
            onPress={action("clicked-button")}
            buttonColor={colors.orange}
            isGradient
        />
    ))
    .add("google button", () => (
        <ButtonCustom
            title={"Sign In with Google"}
            buttonStyle={{backgroundColor: colors.googleColor}}
            textStyle={{color: "#333"}}
            passingProps={{icon: "google"}}
        />
    ))
    .add("facebook button", () => (
        <ButtonCustom
            title={"Sign In with Facebook"}
            textStyle={{color: "#fff"}}
            buttonStyle={{backgroundColor: colors.faceBookColor}}
            passingProps={{icon: "facebook"}}
        />
    ));
