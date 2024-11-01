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
  LabelList,
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

const CHART_COLORS = {
  primary: "#2563eb", // Blue
  secondary: "#0891b2", // Cyan
  accent: "#7c3aed", // Purple
  success: "#059669", // Green
  warning: "#d97706", // Orange
};

const CHART_COLOR_SCHEME = [
  CHART_COLORS.primary,
  CHART_COLORS.secondary,
  CHART_COLORS.accent,
  CHART_COLORS.success,
  CHART_COLORS.warning,
];

const CHART_STYLES = {
  fontSize: 12,
  fontFamily: "Inter, sans-serif",
  tooltip: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    border: "none",
    borderRadius: "8px",
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    padding: "12px",
  },
  label: {
    fontSize: 12,
    fill: "#6B7280", // text-gray-500
  },
};

interface AnalyticsData {
  country: string;
  city: string;
  browser: string;
  activeUsers: number;
  sessions: number;
  newUsers: number;
}

interface ChartProps {
  data: any[];
  dataKeys: string[];
  colors: string[];
}

export default function Analytics() {
  const [data, setData] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/analytics");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();

        if (!result.rows || result.rows.length === 0)
          throw new Error("No data received from API");

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
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center text-red-600">
          <p className="text-lg font-medium">Error loading analytics data</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      </div>
    );
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

  return (
    <div className="space-y-8 p-6 px-0 max-w-7xl mx-auto">
      <Card className="rounded-xl border-border/40 shadow-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold">
            Analytics Overview
          </CardTitle>
          <CardDescription className="text-base">
            Key metrics from the last 90 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="border-b bg-muted/30 py-2  ">
                <CardTitle className="text-base font-medium">
                  Active Users by Country
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[350px] w-full pt-4">
                <BarChartComponent
                  data={countryData}
                  dataKeys={["activeUsers"]}
                  colors={[CHART_COLORS.primary]}
                />
              </CardContent>
            </Card>

            <Card className="rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="border-b bg-muted/30 py-2">
                <CardTitle className="text-base font-medium">
                  Sessions by Browser
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[350px] w-full pt-4">
                <PieChart width={450} height={250}>
                  <Pie
                    data={browserData}
                    dataKey="sessions"
                    nameKey="browser"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      value,
                      name,
                    }) => {
                      const RADIAN = Math.PI / 180;
                      const radius = outerRadius * 1.2;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);
                      const percent = (
                        (value /
                          browserData.reduce(
                            (sum, entry) => sum + entry.sessions,
                            0
                          )) *
                        100
                      ).toFixed(0);

                      return (
                        <text
                          x={x}
                          y={y}
                          fill="#4B5563"
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                          style={CHART_STYLES.label}
                        >
                          {`${name} (${percent}%)`}
                        </text>
                      );
                    }}
                  >
                    {browserData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          CHART_COLOR_SCHEME[index % CHART_COLOR_SCHEME.length]
                        }
                        stroke="white"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={CHART_STYLES.tooltip}
                    formatter={(value) => new Intl.NumberFormat().format(value)}
                  />
                  {/* <Legend
                    wrapperStyle={{ marginTop: "100px", marginLeft: "0px" }}
                    iconType="circle"
                    formatter={(value) => (
                      <span style={{ color: "#4B5563", fontSize: "12px" }}>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </span>
                    )}
                  /> */}
                </PieChart>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-xl border-border/40 shadow-sm">
        <CardHeader className="space-y-1 border-b bg-muted/30 py-2">
          <CardTitle className="text-base font-semibold">
            Detailed Analytics
          </CardTitle>
          <CardDescription className="text-sm">
            Comprehensive breakdown of analytics data
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="font-semibold">Country</TableHead>
                  <TableHead className="font-semibold">City</TableHead>
                  <TableHead className="font-semibold">Browser</TableHead>
                  <TableHead className="font-semibold text-right">
                    Active Users
                  </TableHead>
                  <TableHead className="font-semibold text-right">
                    Sessions
                  </TableHead>
                  <TableHead className="font-semibold text-right">
                    New Users
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell className="font-medium">
                      {item.country}
                    </TableCell>
                    <TableCell>{item.city}</TableCell>
                    <TableCell>{item.browser}</TableCell>
                    <TableCell className="text-right">
                      {item.activeUsers.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.sessions.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.newUsers.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const BarChartComponent = ({ data, dataKeys, colors }) => (
  <BarChart
    width={400}
    height={320}
    data={data}
    margin={{ top: 20, right: 30, left: -60, bottom: 5 }}
  >
    <XAxis
      dataKey="country"
      tick={CHART_STYLES.label}
      axisLine={{ stroke: "#e5e7eb" }}
      tickLine={false}
    />
    <YAxis
      tick={CHART_STYLES.label}
      axisLine={{ stroke: "#e5e7eb" }}
      tickLine={false}
      width={80}
    />
    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
    <Tooltip
      contentStyle={CHART_STYLES.tooltip}
      cursor={{ fill: "rgba(224, 231, 255, 0.2)" }}
      formatter={(value) => new Intl.NumberFormat().format(value)}
    />
    <Legend
      wrapperStyle={{ paddingTop: "20px", paddingLeft: "50px" }}
      iconType="circle"
      formatter={(value) => (
        <span style={{ color: "#4B5563", fontSize: "12px" }}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )}
    />
    {dataKeys.map((key, index) => (
      <Bar
        key={key}
        dataKey={key}
        fill={colors[index % colors.length]}
        barSize={40}
        radius={[6, 6, 0, 0]}
      >
        <LabelList
          dataKey={key}
          position="top"
          style={CHART_STYLES.label}
          formatter={(value) =>
            new Intl.NumberFormat("en", {
              notation: "compact",
              compactDisplay: "short",
            }).format(value)
          }
        />
      </Bar>
    ))}
  </BarChart>
);
