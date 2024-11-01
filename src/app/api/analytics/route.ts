// app/api/analytics/route.js

import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID;

export async function GET() {
  try {
    if (!GA4_PROPERTY_ID) {
      throw new Error("GA4_PROPERTY_ID is not configured");
    }

    const keyPath = path.join(
      process.cwd(),
      "./config/service-account-key-2.json"
    );

    if (!fs.existsSync(keyPath)) {
      throw new Error("Service account key file not found");
    }

    const keyFile = JSON.parse(fs.readFileSync(keyPath, "utf8"));
    const cleanedPrivateKey = keyFile.private_key.replace(/\\n/g, "\n");

    const auth = new google.auth.JWT({
      email: keyFile.client_email,
      key: cleanedPrivateKey,
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
        ],
        metrics: [
          { name: "activeUsers" },
          { name: "sessions" },
          { name: "newUsers" },
        ],
      },
    });

    if (!result.data) {
      throw new Error("No data received from Analytics API");
    }

    return NextResponse.json(result.data);
  } catch (error: any) {
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
