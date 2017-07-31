import React from "react";
import { Animated } from "react-native";
import PerformanceChart from "./PerformanceChart";

const AnimatedPerformanceChart = Animated.createAnimatedComponent(PerformanceChart);
export default class AnimatedPerformanceChartWrapper extends React.Component {
  state = {
    animatedValue: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.animatedValue, { toValue: 2, duration: 700 }).start();
  }

  render() {
    return <AnimatedPerformanceChart {...this.props} drawPercentage={this.state.animatedValue} />
  }
};
