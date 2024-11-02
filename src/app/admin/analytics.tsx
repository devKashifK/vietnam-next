"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
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
  primary: "#2563eb",
  secondary: "#0891b2",
  accent: "#7c3aed",
  success: "#059669",
  warning: "#d97706",
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
    fill: "#6B7280",
  },
};

export default function Analytics() {
  const [data, setData] = useState([]);
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
          pagePath: row.dimensionValues[3].value,
          activeUsers: parseInt(row.metricValues[0].value),
          sessions: parseInt(row.metricValues[1].value),
          newUsers: parseInt(row.metricValues[2].value),
          screenPageViews: parseInt(row.metricValues[3].value),
          engagementRate: parseFloat(row.metricValues[4].value),
          averageSessionDuration: parseFloat(row.metricValues[5].value),
          bounceRate: parseFloat(row.metricValues[6].value),
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
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  // Aggregate data by country, browser, and page path for visualization
  const countryData = aggregateData(data, "country", "activeUsers");
  const browserData = aggregateData(data, "browser", "sessions");
  const pageViewData = aggregateData(data, "pagePath", "screenPageViews");

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
          <div className="grid h-max grid-cols-1 lg:grid-cols-2 space-x-8">
            <ChartCard
              title="Active Users by Country"
              data={countryData}
              dataKey="activeUsers"
              chartType="bar"
              width={350}
              height={450}
            />
            <ChartCard
              title="Sessions by Browser"
              data={browserData}
              dataKey="sessions"
              chartType="pie"
              width={350}
              height={450}
            />
          </div>
          <div className="mt-4">
            <ChartCard
              title="Page Views by Page Path"
              data={pageViewData}
              width={900}
              height={450}
              dataKey="screenPageViews"
              chartType="bar"
            />
          </div>
        </CardContent>
      </Card>

      <DetailedAnalyticsTable data={data} />
    </div>
  );
}

// Components and Helpers

function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4">Loading analytics data...</p>
      </div>
    </div>
  );
}

function ErrorMessage({ error }) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center text-red-600">
        <p className="text-lg font-medium">Error loading analytics data</p>
        <p className="text-sm mt-2">{error}</p>
      </div>
    </div>
  );
}

function ChartCard({ title, data, dataKey, chartType, width, height }) {
  return (
    <Card className="rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="border-b bg-muted/30 py-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[550px]  w-full pt-4">
        {chartType === "bar" ? (
          <BarChart
            width={width}
            height={height}
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={CHART_STYLES.label} />
            <YAxis tick={CHART_STYLES.label} />
            <Tooltip contentStyle={CHART_STYLES.tooltip} />
            <Legend />
            <Bar dataKey={dataKey} fill={CHART_COLORS.primary} />
          </BarChart>
        ) : (
          <PieChart width={350} height={450}>
            <Pie
              data={data}
              dataKey={dataKey}
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill={CHART_COLORS.primary}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CHART_COLOR_SCHEME[index % CHART_COLOR_SCHEME.length]}
                />
              ))}
            </Pie>
            <Tooltip contentStyle={CHART_STYLES.tooltip} />
            <Legend />
          </PieChart>
        )}
      </CardContent>
    </Card>
  );
}

function DetailedAnalyticsTable({ data }) {
  return (
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
                <TableHead className="font-semibold">Page Path</TableHead>
                <TableHead className="font-semibold text-right">
                  Active Users
                </TableHead>
                <TableHead className="font-semibold text-right">
                  Sessions
                </TableHead>
                <TableHead className="font-semibold text-right">
                  New Users
                </TableHead>
                <TableHead className="font-semibold text-right">
                  Page Views
                </TableHead>
                <TableHead className="font-semibold text-right">
                  Engagement Rate
                </TableHead>
                <TableHead className="font-semibold text-right">
                  Avg. Session Duration
                </TableHead>
                <TableHead className="font-semibold text-right">
                  Bounce Rate
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{item.country}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.browser}</TableCell>
                  <TableCell>{item.pagePath}</TableCell>
                  <TableCell className="text-right">
                    {item.activeUsers}
                  </TableCell>
                  <TableCell className="text-right">{item.sessions}</TableCell>
                  <TableCell className="text-right">{item.newUsers}</TableCell>
                  <TableCell className="text-right">
                    {item.screenPageViews}
                  </TableCell>
                  <TableCell className="text-right">
                    {(item.engagementRate * 100).toFixed(1)}%
                  </TableCell>
                  <TableCell className="text-right">
                    {formatDuration(item.averageSessionDuration)}
                  </TableCell>
                  <TableCell className="text-right">
                    {(item.bounceRate * 100).toFixed(1)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

function aggregateData(data, dimension, metric) {
  return data.reduce((acc, item) => {
    const existingItem = acc.find((d) => d.name === item[dimension]);
    if (existingItem) {
      existingItem[metric] += item[metric];
    } else {
      acc.push({ name: item[dimension], [metric]: item[metric] });
    }
    return acc;
  }, []);
}

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}m ${remainingSeconds}s`;
}
