module.exports = {
    siteMetadata: {
        title: `Gatsby TypeScript + ESlint + Prettier Starter`,
        description: `This Gatsby starter is an adaptation of the default Gatsby starter with TypeScript, ESlint and Prettier pre-configured, bringing you everything you need to get up and running with Gatsby in a type-safe and style-safe way.`,
        author: `@Tielem <ttielu@gmail.com>`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-ts`,
            options: {
                tsLoader: {
                    logLevel: `warn`,
                },
                forkTsCheckerPlugin: {
                    eslint: true,
                },
                codegen: false,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
