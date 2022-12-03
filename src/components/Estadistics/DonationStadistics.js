import Layout from "../Layout/Layout";
import axios from "axios";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Card from "../Card/Card";
import style from "../Card/Card.module.css";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function DonationStadistics() {
  const [dataSet, setDataSet] = useState([]);
  const [female, setFemale] = useState(0);
  const [male, setMale] = useState(0);
  const [NotBinary, setNotBinary] = useState(0);
  const [others, setOthers] = useState(0);
  const [janury, setJanury] = useState(0);
  const [february, setFebruary] = useState(0);
  const [march, setMarch] = useState(0);
  const [abril, setAbril] = useState(0);
  const [may, setMay] = useState(0);
  const [june, setJune] = useState(0);
  const [july, setJuly] = useState(0);
  const [august, setAugust] = useState(0);
  const [september, setSeptember] = useState(0);
  const [october, setOctober] = useState(0);
  const [november, setNovember] = useState(0);
  const [december, setDecember] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/api/donations/").then((response) => {
      setDataSet(response.data);
      let totalMan = 0;
      let totalWoman = 0;
      let totalBinary = 0;
      let totalOthers = 0;
      let totalJanuary = 0;
      let totalFebruary = 0;
      let totalMarch = 0;
      let totalApril = 0;
      let totalMay = 0;
      let totalJune = 0;
      let totalJuly = 0;
      let totalAugust = 0;
      let totalSeptember = 0;
      let totalOctober = 0;
      let totalNovember = 0;
      let totalDecember = 0;

      response.data.forEach((data) => {
        //Count donations per gender
        if (data.personalInformation.gender === "Masculino")
          totalMan = totalMan + 1;
        else if (data.personalInformation.gender === "Femenino")
          totalWoman = totalWoman + 1;
        else if (data.personalInformation.gender === "No binario")
          totalBinary = totalBinary + 1;
        else totalOthers = totalOthers + 1;
      });
      response.data.forEach((data) => {
        const date = data.updateDate.split("-");
        switch (date[1]) {
          case "01":
            totalJanuary = totalJanuary + 1;
            break;
          case "02":
            totalFebruary = totalFebruary + 1;
            break;
          case "03":
            totalMarch = totalMarch + 1;
            break;
          case "04":
            totalApril = totalApril + 1;
            break;
          case "05":
            totalMay = totalMay + 1;
            break;
          case "06":
            totalJune = totalJune + 1;
            break;
          case "07":
            totalJuly = totalJuly + 1;
            break;
          case "08":
            totalAugust = totalAugust + 1;
            break;
          case "09":
            totalSeptember = totalSeptember + 1;
            break;
          case "10":
            totalOctober = totalOctober + 1;
            break;
          case "11":
            totalNovember = totalNovember + 1;
            break;
          case "12":
            totalDecember = totalDecember + 1;
            break;
        }
      });

      setMale(totalMan);
      setFemale(totalWoman);
      setNotBinary(totalBinary);
      setOthers(totalOthers);
      setJanury(totalJanuary);
      setFebruary(totalFebruary);
      setMarch(totalMarch);
      setAbril(totalApril);
      setMay(totalMay);
      setJune(totalJune);
      setJuly(totalJuly);
      setAugust(totalAugust);
      setSeptember(totalSeptember);
      setOctober(totalOctober);
      setNovember(totalNovember);
      setDecember(totalDecember);
    });
  }, []);

  const data = [
    {
      name: "Hombres",
      quantity: male,
    },
    {
      name: "Mujer",
      quantity: female,
    },
    {
      name: "No binario",
      quantity: NotBinary,
    },
    {
      name: "Otros",
      quantity: others,
    },
  ];
  const data1 = [
    {
      name: "Enero",
      quantity: janury,
    },
    {
      name: "Febrero",
      quantity: february,
    },
    {
      name: "Marzo",
      quantity: march,
    },
    {
      name: "Abril",
      quantity: abril,
    },
    {
      name: "Mayo",
      quantity: may,
    },
    {
      name: "Junio",
      quantity: june,
    },
    {
      name: "Julio",
      quantity: july,
    },
    {
      name: "Agosto",
      quantity: august,
    },
    {
      name: "September",
      quantity: september,
    },
    {
      name: "Octubre",
      quantity: october,
    },
    {
      name: "Noviembre",
      quantity: november,
    },
    {
      name: "Diciembre",
      quantity: december,
    },
  ];

  const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
    y + height
  } ${x + width}, ${y + height}
          Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  return (
    <Layout title="Estadísticas">
      <Card className={style.home_item}>
        <h2>Estadísticas de donaciones</h2>
        <div style={{ display: "flex", gap:"3rem", margin:"3rem" }}>
          <div>
            <h5>Cantidad de donaciones por genero</h5>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="quantity" fill="#4EAB9E" />
            </BarChart>
          </div>
          <div>
            <h5>Cantidad de donaciones por mes</h5>
            <BarChart
              width={500}
              height={300}
              data={data1}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#4EAB9E"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

export default DonationStadistics;
