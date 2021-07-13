import React, {useEffect} from "react";
import {ScrollView, Text, View} from "react-native";
import {ButtonCustom, Card, ContainerView} from "../../../components";
import colors from "../../../styles/colors";
import styles from "../../Start/styles";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchTripInfo} from "../store/fetchers";
import {timestampTimeFormatter} from "../../../utils/helper";
import Icons from "react-native-vector-icons/MaterialIcons";
import {
  Circle,
  ClipPath,
  Defs,
  G,
  Line,
  Rect,
  Svg,
  LinearGradient,
} from "react-native-svg";
import {Grid, LineChart,AreaChart,Path} from "react-native-svg-charts";
import * as shape from 'd3-shape';
const TripDetails = (props) => {
  useEffect(() => {
    props.fetchTripInfo();
  }, []);

  const Gradient = ({ index }) => (
    <Defs key={index}>
      <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
        <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.8}/>
        <Stop offset={'100%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.2}/>
      </LinearGradient>
    </Defs>
  )

  const onSearch = async () => {
    props.navigation.navigate("OptionsSelectStock");
  };

  const GetStartedButton = () => {
    return (
      <ButtonCustom
        buttonStyle={{
          marginTop: 20,
          backgroundColor: colors.black,
        }}
        title={"Get Started"}
        onPress={() => {
          onSearch();
        }}
      />
    );
  };
  const Challenges = (name, score) => {
    return (
      <View style={{marginLeft: 10}}>
        <View style={{width: 160}}>
          <Card>
            <Text style={{padding: 10, fontSize: 20}}>{name}</Text>
            <Text style={{padding: 10, fontSize: 40}}>{score}</Text>
            <Text style={{padding: 10, fontSize: 18}}>
              {"Score"}
            </Text>
          </Card>
        </View>
      </View>
    );
  };
  const data = [0, 0 ];
  if(!props.tripInfo){
    return <View/>
  }
  const RenderLowRect = ({x, y}) => {
    return (
      <Svg>
        <Rect
          x={0}
          y="0"
          width={x(1)}
          height="100%"
          fill={"red"}
        />
      </Svg>
    );
  };


  const indexToClipFrom = 4;
  const Clips = ({ x, y,width }) => {
    console.log(x);
    console.log(y);
    console.log(width);
    return(
    <Defs key={ 'clips' }>
      <ClipPath id="clip-path-1">
        <Rect x={ '0' } y={ '0' } width={ width } height={ '100%' }/>
      </ClipPath>
      <ClipPath id="clip-path-2">
        <Rect x={ "60" } y={ "0" } width={100 } height={ '100%' }/>
      </ClipPath>
      <ClipPath id="clip-path-3">
        <Rect x={"220"} y={"0"} width={ 100 } height={ '100%' }/>
      </ClipPath>
    </Defs>
  )}

// Line extras:
  const DashedLine = ({ line }) => (
    <Path
      key={ 'line-1' }
      d={ line }
      stroke={ 'rgb(134, 65, 244)' }
      strokeWidth={ 4 }
      fill={ 'none' }
      clipPath={ 'url(#clip-path-2)' }
    />
  )

  const DashedLine2 = ({ line }) => (
    <Path
      key={ 'line-2' }
      d={ line }
      stroke={ 'rgb(199,29,29)' }
      strokeWidth={ 4 }
      fill={ 'none' }
      clipPath={ 'url(#clip-path-3)' }
    />
  )

  const ChartLines = ({x, y}) => {
    return  <G>
      <HorizontalLine x={x} y={y} />
    </G>
  };
  const HorizontalLine = ({y}) => {
    return (
      <Line
        key={"zero-axis"}
        x1={"0%"}
        x2={"100%"}
        y1={y(0)}
        y2={y(0)}
        stroke={"grey"}
        strokeWidth={2}
      />
    );
  };

  const line = shape.curveBasis;
  return (
    <View style={{flex: 1}}>

      <View style={{ height:200 }}>
        <Text style={styles.mainText}>
          {"Samstag, 18. Juli 2021"}
        </Text>

        <LineChart
          style={ { height: 200 } }
          data={data}
          contentInset={{top: 20, bottom: 20}}
          curve={line}
          svg={{
            stroke:"#27A69A",
            strokeWidth: 4,
            clipPath: "url(#clip-path-1)",
          }}>
          <Clips/>
          <DashedLine/>
          <DashedLine2/>
        </LineChart>
        <Text style={styles.mainText}>
          {"Samstag, 18. Juli 2021"}
        </Text>
      </View>

    </View>
  );
};

const mapStateToProps = (state) => {
  const {tripInfoReducer} = state;
  return {
    tripInfo: tripInfoReducer.tripInfo,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({fetchTripInfo: fetchTripInfo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
