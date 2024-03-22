module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
        sites: [
          {
            name: 'wordtune',
            id: "2d016cdc-2889-47d4-8a54-10819816ee0c",
            buildHook: "https://api.netlify.com/build_hooks/65fd2e3438fbe9dd5e7a6915",
            branch: 'main' // optional
          }
        ]
      },
    },
  });
  



