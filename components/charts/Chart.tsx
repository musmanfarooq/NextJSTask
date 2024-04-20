import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartProps {
  type:
    | "area"
    | "line"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap"
    | undefined;
  xaxis: string[];
  seriesName: string;
  seriesData: number[];
}

const ChartComponent = (props: ChartProps) => {
  const options: ApexOptions = {
    chart: {
      type: props.type,
    },
    xaxis: {
      categories: props.xaxis,
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series: ApexAxisChartSeries = [
    {
      name: props.seriesName,
      data: props.seriesData,
    },
  ];

  return (
    <Chart options={options} series={series} type={props.type} height={350} />
  );
};

export default ChartComponent;
