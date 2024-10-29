"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function Analytics() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/analytics");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        console.log("API Response:", result);

        if (!result.rows || result.rows.length === 0) {
          throw new Error("No data received from API");
        }

        const processedData = result.rows.map((row) => ({
          country: row.dimensionValues[0].value,
          city: row.dimensionValues[1].value,
          browser: row.dimensionValues[2].value,
          activeUsers: parseInt(row.metricValues[0].value),
          sessions: parseInt(row.metricValues[1].value),
          newUsers: parseInt(row.metricValues[2].value),
        }));

        setData(processedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>No data available to display charts.</div>;
  }

  const countryData = data.reduce((acc, item) => {
    const existingCountry = acc.find((c) => c.country === item.country);
    if (existingCountry) {
      existingCountry.activeUsers += item.activeUsers;
    } else {
      acc.push({ country: item.country, activeUsers: item.activeUsers });
    }
    return acc;
  }, []);

  const browserData = data.reduce((acc, item) => {
    const existingBrowser = acc.find((b) => b.browser === item.browser);
    if (existingBrowser) {
      existingBrowser.sessions += item.sessions;
    } else {
      acc.push({ browser: item.browser, sessions: item.sessions });
    }
    return acc;
  }, []);

  console.log("Country Data:", countryData);
  console.log("Browser Data:", browserData);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Analytics Overview</CardTitle>
          <CardDescription>Key metrics from the last 90 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Users by Country</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px] w-[300px]">
                <BarChartComponent
                  data={countryData}
                  dataKeys={["activeUsers"]}
                  colors={["hsl(var(--chart-1))"]}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sessions by Browser</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px] w-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={browserData}
                      dataKey="sessions"
                      nameKey="browser"
                      width={500}
                      height={400}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {browserData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Analytics</CardTitle>
          <CardDescription>Breakdown of analytics data</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Browser</TableHead>
                <TableHead>Active Users</TableHead>
                <TableHead>Sessions</TableHead>
                <TableHead>New Users</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.country}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.browser}</TableCell>
                  <TableCell>{item.activeUsers}</TableCell>
                  <TableCell>{item.sessions}</TableCell>
                  <TableCell>{item.newUsers}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <ul className="flex flex-wrap justify-center items-center gap-1 ml-10 list-none p-0 -mt-2">
      {payload &&
        payload.map((entry, index) => {
          return (
            <div className="flex flex-shrink-0 justify-center items-center gap-1.5">
              <div
                className="w-4 h-3 rounded-sm"
                style={{ backgroundColor: entry.color }}
              ></div>
              <AttributeName
                className="text-base mt-0.5"
                name={entry.value}
                style={{ color: entry.color }}
              />
            </div>
          );
        })}
    </ul>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div className="w-48 bg-scale-100 rounded-sm shadow-sm">
      <div className="flex justify-between items-center bg-scale-400 border-b px-2 py-0.5 rounded-t-sm">
        <span>{label}</span>
      </div>
      <div className="flex gap-0.5 flex-col px-2 py-0.5">
        {payload &&
          payload
            .filter((item) => item.value !== 0)
            .map((item, index) => (
              <div className="flex justify-between items-center" key={index}>
                <div className="flex gap-1 items-center">
                  <div
                    className="w-4 h-3 rounded-sm"
                    style={{ background: item.color }}
                  ></div>
                  <AttributeName name={item.dataKey} className="text-base" />
                </div>
                <AttributeVal value={item.value} className="text-base" />
              </div>
            ))}
      </div>
    </div>
  );
};

const BarChartComponent = ({ data, dataKeys, colors }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data}>
      <XAxis dataKey="date" tick={{ fontSize: 13, fill: "#333" }} />
      <YAxis tick={{ fontSize: 12, fill: "#333" }} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip
        content={<CustomTooltip />}
        wrapperStyle={{ borderRadius: "8px" }}
      />

      <Legend
        content={<CustomLegend />}
        wrapperStyle={{ paddingTop: "10px" }}
      />
      {dataKeys.map((key, index) => (
        <Bar
          key={key}
          dataKey={key}
          fill={colors[index % colors.length]}
          barSize={30}
          radius={[5, 5, 0, 0]}
        />
      ))}
    </BarChart>
  </ResponsiveContainer>
);

export const dynamic = "force-dynamic";
