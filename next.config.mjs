
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '*.supabase.co',
      port: ''
    }]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard', // Change this to your desired page
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
