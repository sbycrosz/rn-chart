import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AnimatedPerformanceChart from "./charts/AnimatedPerformanceChart";

const performanceData = [
  { date: new Date(2017, 1, 1), value: 30000, low: 12000, high: 48000 },
  { date: new Date(2018, 1, 1), value: 64800, low: 25920, high: 103680 },
  { date: new Date(2019, 1, 1), value: 102384, low: 40954, high: 163814 },
  { date: new Date(2020, 1, 1), value: 142975, low: 57190, high: 228760 },
  { date: new Date(2021, 1, 1), value: 186813, low: 74725, high: 298900 },
  { date: new Date(2022, 1, 1), value: 234158, low: 93663, high: 374652 },
  { date: new Date(2023, 1, 1), value: 285290, low: 114116, high: 456465 },
  { date: new Date(2024, 1, 1), value: 340514, low: 136205, high: 544822 },
  { date: new Date(2025, 1, 1), value: 400155, low: 160062, high: 640247 },
  { date: new Date(2026, 1, 1), value: 464567, low: 185827, high: 743307 },
  { date: new Date(2027, 1, 1), value: 534132, low: 213653, high: 854612 },
  { date: new Date(2028, 1, 1), value: 609263, low: 243705, high: 974821 },
  { date: new Date(2029, 1, 1), value: 690404, low: 276162, high: 1104646 },
  { date: new Date(2030, 1, 1), value: 778036, low: 311215, high: 1244858 },
  { date: new Date(2031, 1, 1), value: 872679, low: 349072, high: 1396287 },
  { date: new Date(2032, 1, 1), value: 974894, low: 389957, high: 1559830 },
  { date: new Date(2033, 1, 1), value: 1085285, low: 434114, high: 1736456 },
  { date: new Date(2034, 1, 1), value: 1204508, low: 481803, high: 1927213 },
  { date: new Date(2035, 1, 1), value: 1333268, low: 533307, high: 2133230 },
  { date: new Date(2036, 1, 1), value: 1472330, low: 588932, high: 2355728 },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <AnimatedPerformanceChart data={performanceData} width={300} height={225} />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "monospace",
    padding: 20,
  },
});
