import React, { useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const App = () => {
  const [histogramData, setHistogramData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHistogramData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://www.terriblytinytales.com/test.txt"
      );
      const wordsCount = response.data
        .replace(/[^\w\s]/gi, "") 
        .toLowerCase()
        .split(/\s+/) 
        .reduce((acc, word) => {
          acc[word] = acc[word] ? acc[word] + 1 : 1;
          return acc;
        }, {});
      const histogramData = Object.entries(wordsCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20)
        .map(([word, count]) => ({ word, count }));
      setHistogramData(histogramData);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleExportCSV = () => {
    const csvData = Papa.unparse(histogramData);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "histogram.csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={fetchHistogramData} disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>
      {!!histogramData.length && (
        <div>
          <button onClick={handleExportCSV}>Export</button>
          <BarChart width={800} height={400} data={histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
      )}
    </div>
  );
};

export default App;
