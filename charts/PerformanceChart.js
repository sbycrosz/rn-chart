import React from "react";
import { View, Text } from "react-native";
import { Svg } from "expo";
import * as shape from "d3-shape";
import { scaleLinear, scaleTime } from "d3-scale";
import _ from "lodash";

export default class PerformanceChart extends React.Component {
  render() {
    // const { data, width, height, drawPercentage: banana } = this.props;
    // console.log(banana);
    // const drawPercentage = 1;
    const { data, width, height, drawPercentage } = this.props;

    const x = scaleTime()
        .domain([_(data).map("date").min(), _(data).map("date").max()])
        .range([0, width]);

    const y = scaleLinear()
        .domain([0, _(data).map("value").max() * 2.0])
        .range([height, 0]);

    const area = shape.area()
        .x(function(d) { return x(d.date); })
        .y1(function(d) {
          const delta = d.value - d.low;
          const low = d.value - delta * Math.max(drawPercentage - 1, 0);
          return y(low);
        })
        .y0(function(d) {
          const delta = d.high - d.value;
          const high = d.value + delta * Math.max(drawPercentage - 1, 0);
          return y(high);
        })
        .curve(shape.curveBasis)
        (data);

    const line = shape.line()
        .x(d => x(d.date))
        .y(d => y(d.value))
        (data.slice(0, Math.floor(data.length * drawPercentage)));

    return (
      <View  style={{ borderWidth: 1, backgroundColor: "#114974" }} >
        <Svg height={height} width={width}>
          <Svg.Defs>
              <Svg.LinearGradient id="grad"  x1="0%" y1="0%" x2="100%" y2="0%">
                  <Svg.Stop offset="0%" stopColor="#0BB241" stopOpacity="0.05" />
                  <Svg.Stop offset="50%" stopColor="#0BB241" stopOpacity="0.75" />
                  <Svg.Stop offset="100%" stopColor="#0BB241" stopOpacity="0.05" />
              </Svg.LinearGradient>
          </Svg.Defs>
          { !!area && <Svg.Path d={area} fill="url(#grad)" /> }
          { !!line && <Svg.Path d={line} strokeWidth={1} stroke="#fff" fill="none" /> }
        </Svg>
      </View>
    );
  }
}
