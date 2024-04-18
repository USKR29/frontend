/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'http',
        hostname:'192.168.0.106',
        port:'1337',
      }
    ]
  }
};

export default nextConfig;
