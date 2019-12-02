
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.


console.log('process.env.NODE_ENV :', process.env.NODE_ENV);

const extlink = require('remarkable-extlink');

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption:  'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image:    '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned:   true,
  },
];

const siteConfig = {
  title:   'Documentation', // Title for your website.
  tagline: 'of ViewAR\'s SDK and API',
  // url:     'https://your-docusaurus-test-site.com', // Your website URL
  // baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  url:     'https://viewar.github.io',
  baseUrl: '/documentation/',

  // Used for publishing and more
  projectName:      'documentation',
  organizationName: 'viewar',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // On page navigation for the current documentation page.
  onPageNav:              'separate',
  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // For no header links in the top nav bar -> headerLinks: [],
  // TODO: enable external headerlinks to be openened in new tab
  headerLinks: [
    {
      doc:   'sdk/introduction',
      label: 'SDK',
    },
    {
      href:   'http://viewar.com/',
      label:  'Developer Portal',
    },
    {
      href:   'http://test2.3.viewar.com/docs/index.html',
      label:  'API',
    },
    {
      label:  'Search',
      search: true,
    },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/viewar_logo.svg',
  footerIcon: '',
  favicon:    'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor:   '#a41f1f', // ViewAr - red
    secondaryColor: '#282f39', // ViewAr - headerbg
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: 'Copyright © 2019 ViewAR GmbH',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [ 'https://buttons.github.io/buttons.js' ],

  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage:      'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // TODO: create id for fb page-app
  // facebookAppId: 'ViewARcom',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  // docsearch api
  algolia: {
    apiKey:         '5207094edcc772e8784736cd40203ef0',
    indexName:      'viewar',
    placeholder:    'Search',
    algoliaOptions: {}, // Optional, if provided by Algolia
  },
  markdownPlugins: [
    function(md) {
      extlink(md, {
        host: process.env.NODE_ENV === 'development' ? 'localhost' : 'https://viewar.github.io/', // The hrefs that you DON'T want to be external
      });
    },
  ],
};

module.exports = siteConfig;
