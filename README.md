# ViewAR Documentation

> built with [Docusaurus](https://v2.docusaurus.io)

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=viewar/documentation)](https://dependabot.com)

## Development

change directory to `./website` and exec `npm run start`

## Deployment

Run `npm run build` on root level (not in /website anymore). This will automatically build two versions (standalone [folder "/website"] and portal [folder: "/portal"]), put them together into one directory and create a commit on branch gh-pages.

## Changelog

### [1.12.4](https://github.com/viewar/viewar-documentation/compare/v1.12.3...v1.12.4) (2020-10-14)

#### Features

- **Additional Information** Supported hardware - improve iOS information.

### [1.12.3](https://github.com/viewar/viewar-documentation/compare/v1.12.2...v1.12.3) (2020-07-13)

#### Features

- **Quickstart** Add "Projects" section.
- **3D Content** Custom 3D models animations info fix.

### [1.12.2](https://github.com/viewar/viewar-documentation/compare/v1.12.1...v1.12.2) (2020-06-03)

#### Features

- **Tutorials** Add videos to tutorials.
- **Additional** Update supported devices page.
- **3D Content** Improve Custom 3D Models section.

### [1.12.1](https://github.com/viewar/viewar-documentation/compare/v1.12.0...v1.12.1) (2020-05-14)

#### Features

- **FAQ** Update with information from the new DP and add new questions.

### [1.11.2](https://github.com/viewar/viewar-documentation/compare/v1.11.1...v1.11.2) (2020-04-23)

#### Features

- **3D Models - Sample Models** Added sample model thumbnails.

### [1.11.1](https://github.com/viewar/viewar-documentation/compare/v1.11.0...v1.11.1) (2020-04-22)

#### Features

- **Manuals** Updated helpar manuals (client and agent)
- **3D Models - Sample Models** Updated Sample Models list and instructions.

### [1.11.0](https://github.com/viewar/viewar-documentation/compare/v1.10.1...v1.11.0) (2020-04-10)

#### Features

- **Tutorials** Updated Furniture Live and Wall Art Tutorials (new CLI version etc.).
- **Manuals** Updated Furniture Live Manual.

### [1.10.1](https://github.com/viewar/viewar-documentation/compare/v1.10.0...v1.10.1) (2020-04-09)

#### Features

- **Pubilshing** Improve info.
- **Reporting errors** Improve info.

#### Bug fixes

- **Introduction** Fix deprecated links.

### [1.10.0](https://github.com/viewar/viewar-documentation/compare/v1.9.0...v1.10.0) (2020-03-03)

#### Features

- **Google Analytics** Ad Google Analytics Tracking ID.
- **tutorials** Update WallArt tutorials.

### [1.9.0](https://github.com/viewar/viewar-documentation/compare/v1.8.0...v1.9.0) (2020-02-21)

#### Features

- **docs** Update urls to new ones.

### [1.8.1](https://github.com/viewar/viewar-documentation/compare/v1.8.0...v1.8.1) (2020-02-18)

#### Features

- **Publishing** add section 'Privacy Policy to Google Play Store Publishing.' ([#74](https://github.com/viewar/viewar-documentation/issues/74))
- **README:** Update publishing instruction([#75](https://github.com/viewar/viewar-documentation/issues/75))

#### Bug Fixes

- **Tutorials:** Fix merge leftovers in the helpar tutorial.

### [1.8.0](https://github.com/viewar/viewar-documentation/compare/v1.7.0...v1.8.0) (2019-12-02)

#### Features

- **3D Content:** add section '3D Content' ([#46](https://github.com/viewar/viewar-documentation/issues/46))
- **Tutorials:** Restructure the Tutorials pages ([#33](https://github.com/viewar/viewar-documentation/issues/33) [#43](https://github.com/viewar/viewar-documentation/issues/43) [#44](https://github.com/viewar/viewar-documentation/issues/44))

#### Bug Fixes

- **docs:** duplicated headlines/sections in cli installation instructions ([#54](https://github.com/viewar/viewar-documentation/issues/54)) ([b3d987e](https://github.com/viewar/viewar-documentation/commit/b3d987e))
- **email:** change email to report issues to help@viewar.com ([4a54f56](https://github.com/viewar/viewar-documentation/commit/4a54f56)), closes [#47](https://github.com/viewar/viewar-documentation/issues/47)
- **links:** fix unresolved links ([89bda9b](https://github.com/viewar/viewar-documentation/commit/89bda9b)), closes [#53](https://github.com/viewar/viewar-documentation/issues/53)
- **links:** open external links in new tab ([a05d5bc](https://github.com/viewar/viewar-documentation/commit/a05d5bc)), closes [#24](https://github.com/viewar/viewar-documentation/issues/24)

### [1.7.0](https://github.com/viewar/viewar-documentation/compare/v1.6.0...v1.7.0) (2019-11-14)

#### Bug Fixes

- **installationInstructions:** add 'troubleshooting.md' and increase required versions ([#41](https://github.com/viewar/viewar-documentation/issues/41)) ([9638d1a](https://github.com/viewar/viewar-documentation/commit/9638d1a))
- **version check command** ([44912cd](https://github.com/viewar/viewar-documentation/commit/44912cd))

#### Features

- add husky and format on precommit ([369ebc2](https://github.com/viewar/viewar-documentation/commit/369ebc2))

### [1.6.0](https://github.com/viewar/viewar-documentation/compare/v1.5.0...v1.6.0) (2019-11-08)

#### Features

- **3d content** - add documentation section for 3d content

### [1.5.0](https://github.com/viewar/viewar-documentation/compare/v1.4.0...v1.5.0) (2019-11-05)

#### Bug Fixes

- **deps:** use '@viewar/config-eslint' from npm registry ([0120319](https://github.com/viewar/viewar-documentation/commit/0120319))

#### Features

- **search:** enable search by adding algolia config and api-key ([bd0e85d](https://github.com/viewar/viewar-documentation/commit/bd0e85d))

### [1.4.0](https://github.com/viewar/viewar-documentation/compare/v1.3.0...v1.4.0) (2019-10-21)

- **docs:** Change Advanced Guides to Additional Information ([#31](https://github.com/viewar/documentation/pull/31))

### [1.3.0](https://github.com/viewar/viewar-documentation/compare/v1.2.3...v1.3.0) (2019-10-16)

##### Features

- **docs:** combined "SDK Tutorial" pages ([#21](https://github.com/viewar/viewar-documentation/issues/21)) ([fb7ba38](https://github.com/viewar/viewar-documentation/commit/fb7ba38))
- **Turorials:** combined template_tutorial pages ([98c86f3](https://github.com/viewar/viewar-documentation/commit/98c86f3)), closes [#18](https://github.com/viewar/viewar-documentation/issues/18)

### [1.2.2](https://github.com/viewar/viewar-documentation/compare/v1.2.1...v1.2.2) (2019-10-08)

##### Bug Fixes

- asset links in "tutorials" ([#14](https://github.com/viewar/viewar-documentation/issues/14)) ([01ba51b](https://github.com/viewar/viewar-documentation/commit/01ba51b))

### [1.1.0](https://github.com/viewar/viewar-documentation/compare/cfe6ef6...v1.1.0) (2019-10-07)

##### Features

- lint and format ([#2](https://github.com/viewar/viewar-documentation/issues/2)) ([cfe6ef6](https://github.com/viewar/viewar-documentation/commit/cfe6ef6))
