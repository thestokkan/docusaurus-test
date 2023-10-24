// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Altinn Studio",
  tagline: "We build Altinn together",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "nb"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "Altinn logo",
          src: "img/altinnstudio-logo-white.svg",
        },
        items: [
          {
            label: "Getting started",
            type: "docSidebar",
            sidebarId: "gettingStartedSidebar",
            position: "left",
          },
          {
            label: "Intro course",
            type: "docSidebar",
            sidebarId: "introCourseSidebar",
            position: "left",
          },
          {
            label: "Development",
            type: "docSidebar",
            sidebarId: "developmentSidebar",
            position: "left",
          },
          {
            to: "https://docs.altinn.studio/api/",
            label: "API",
            position: "right",
          },
          {
            to: "https://docs.altinn.studio/community/",
            label: "Community",
            position: "right",
          },
          {
            to: "https://docs.altinn.studio/technology/",
            label: "Technology",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                label: "Accessibility",
                to: "/",
              },
            ],
          },
          {
            items: [
              {
                label: "Backlog",
                to: "/",
              },
            ],
          },
          {
            items: [
              {
                label: "Slack",
                to: "/",
              },
            ],
          },
          {
            items: [
              {
                label: "GitHub",
                to: "/",
              },
            ],
          },
          {
            items: [
              {
                label: "About Altinn",
                to: "/",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
