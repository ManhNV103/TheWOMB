module.exports = {
    apps: [
        {
            name: "TheWomb",
            script: "./build/bin/www.js",
            node_args: "-r dotenv/config",
            env: {
                "PORT": "4001",
                "NODE_ENV": "development"
            },
            production_env: {
                "PORT": "4001",
                "NODE_ENV": "production"
            }
        }
    ]
};