import { google } from "googleapis";
import { NextResponse } from "next/server";

const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID;

export async function GET() {
  try {
    if (!GA4_PROPERTY_ID) {
      throw new Error("GA4_PROPERTY_ID is not configured");
    }

    // Use the environment variables for client email and private key
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    const analyticsDataClient = google.analyticsdata({
      version: "v1beta",
      auth,
    });

    const result = await analyticsDataClient.properties.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: "90daysAgo", endDate: "today" }],
        dimensions: [
          { name: "country" },
          { name: "city" },
          { name: "browser" },
          { name: "pagePath" }, // Add page URL dimension
        ],
        metrics: [
          { name: "activeUsers" },
          { name: "sessions" },
          { name: "newUsers" },
          { name: "screenPageViews" }, // Add page views metric
          { name: "engagementRate" }, // Engagement rate metric
          { name: "averageSessionDuration" }, // Average session duration metric
          { name: "bounceRate" }, // Bounce rate metric
        ],
        orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      },
    });

    if (!result.data) {
      throw new Error("No data received from Analytics API");
    }

    return NextResponse.json(result.data);
  } catch (error) {
    console.error("Analytics API Error:", {
      message: error.message,
      details: error.response?.data,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        error: error.message,
        details: error.response?.data,
      },
      { status: 500 }
    );
  }
}
