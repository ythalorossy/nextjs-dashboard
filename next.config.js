/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "/:path*",
                headers: (req) => {
                    const allowedOrigins = ['http://zwcs0w4.69.138.6.30.sslip.io:3000', 'http://localhost:3000', '*'];
                    const origin = req.headers.origin;
                    if (allowedOrigins.includes(origin)) {
                        return [
                            { key: "Access-Control-Allow-Credentials", value: "true" },
                            { key: "Access-Control-Allow-Origin", value: origin },
                            { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                        ];
                    } else {
                        return []; // return empty array if the origin is not allowed
                    }
                }
            }
        ]
    }
};

module.exports = nextConfig;
