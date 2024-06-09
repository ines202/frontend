import { ApexOptions } from "apexcharts";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

interface IProps {
  registeredCount?: {
    date: string;
    count: string;
    role: "Patient" | "Doctor";
  }[];
}

const ChartTwo: React.FC<IProps> = ({ registeredCount }) => {
  const [state, setState] = useState<ChartTwoState>({
    series: [],
  });

  const dates = Array.from(
    new Set(registeredCount?.map((item) => item.date)),
  ).sort();

  useEffect(() => {
    const doctorData = dates.map((date) => {
      const item = registeredCount?.find(
        (rc) => rc.date === date && rc.role === "Doctor",
      );
      return item ? parseInt(item.count) : 0;
    });

    const patientData = dates.map((date) => {
      const item = registeredCount?.find(
        (rc) => rc.date === date && rc.role === "Patient",
      );
      return item ? parseInt(item.count) : 0;
    });

    setState({
      series: [
        {
          name: "Doctors",
          data: doctorData,
        },
        {
          name: "Patients",
          data: patientData,
        },
      ],
    });
  }, [registeredCount, dates]);

  const options: ApexOptions = {
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 335,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "25%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: "25%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: dates,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "14px",
      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Total Users
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-mb-9 -ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
