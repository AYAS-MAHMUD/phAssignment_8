import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Chart = ({ratings}) => {
    const data = ratings

  return (
    <div className="w-full h-80 p-5 pb-15">
      <h2 className="text-lg font-semibold mb-2">Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="#FFA500" barSize={25} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
