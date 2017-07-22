module.exports = {
    apps: [{
        name: "sleepyzzz-websocket-api",
        script: "index.js",
        cwd: "/var/www/production/sleepyzzz-websocket-api",
        env_production: {
            NODE_ENV: "production"
        }
    }]
}
