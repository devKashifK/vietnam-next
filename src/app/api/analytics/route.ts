// app/api/analytics/route.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import axios from "axios";
import fs from "fs";
import path from "path";

// Load environment variables
const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID;
const SERVICE_ACCOUNT_KEY_PATH = process.env.SERVICE_ACCOUNT_KEY_PATH;
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const API_URL = `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:runReport`;

// Load Service Account JSON
const serviceAccount = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), SERVICE_ACCOUNT_KEY_PATH), "utf8")
);

async function getAccessToken() {
  // Generate a JWT token signed with the service account&apos;s private key
  const token = jwt.sign(
    {
      iss: serviceAccount.client_email,
      scope: "https://www.googleapis.com/auth/analytics.readonly",
      aud: TOKEN_URL,
      exp: Math.floor(Date.now() / 1000) + 3600, // Token expires in 1 hour
      iat: Math.floor(Date.now() / 1000),
    },
    serviceAccount.private_key,
    { algorithm: "RS256" }
  );

  // Exchange JWT for an access token
  const response = await axios.post(TOKEN_URL, {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: token,
  });

  return response.data.access_token;
}

export async function GET() {
  try {
    // Get an access token
    const accessToken = await getAccessToken();

    // Set up the request body with expanded date range and more metrics/dimensions
    const requestBody = {
      dateRanges: [{ startDate: "90daysAgo", endDate: "today" }],
      dimensions: [{ name: "country" }, { name: "city" }, { name: "browser" }],
      metrics: [
        { name: "activeUsers" },
        { name: "sessions" },
        { name: "newUsers" },
      ],
    };

    // Make the request to Google Analytics API
    const response = await axios.post(API_URL, requestBody, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    // Return the data as JSON
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 }
    );
  }
}
