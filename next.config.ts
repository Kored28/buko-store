import type { NextConfig } from "next";
require("dotenv").config()

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,  
  },
  images: {
    remotePatterns : [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", 
      },
    ]
  },
  env: {
    BUKA_PUBLIC_API_URL: process.env.BUKA_PUBLIC_API_URL,
  }
};

export default nextConfig;
