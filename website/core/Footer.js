/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.PureComponent {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;

    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>ViewAR</h5>
            <a href={this.docUrl('introduction')}>Introduction</a>
            <a href={this.docUrl('stack')}>Technology Stack</a>
            <a href={this.docUrl('creating_apps')}>How to create Apps</a>
            <a href={this.docUrl('faq')}>FAQs</a>
          </div>
          <div>
            <h5>SDK</h5>
            <a href={this.pageUrl('sdk')}>API Reference</a>
            <a href={this.pageUrl('sdk')}>Introduction</a>
            <a href={this.pageUrl('docs/sdk/getting_started')}>Getting Started</a>
            <a href={this.pageUrl('docs/sdk/basic_concepts')}>Basic Concepts</a>
            <a href={this.pageUrl('docs/sdk/quickstart')}>Quickstart</a>
          </div>
          <div>
            <h5>Tutorials</h5>
            <a href={this.pageUrl('docs/furniture_live/about')}>Furniture Live</a>
            <a href={this.pageUrl('docs/guidebot/about')}>Guidebot</a>
            <a href={this.pageUrl('docs/helpar/about')}>Helpar</a>
            <a href={this.pageUrl('docs/tutorials/overview')}>More ...</a>
          </div>
          {/* <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html')}>User Showcase</a>
            <a
              href="https://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
            <a href="https://discordapp.com/">Project Chat</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
              Twitter
            </a>
          </div> */}
          <div>
            <h5>More</h5>
            <a href="http://viewar.com/">ViewAR Website</a>
            <a href="https://github.com/viewar">GitHub</a>
            <a href="https://www.facebook.com/ViewARcom/">Facebook</a>
            <a href="https://www.youtube.com/channel/UCOst_5NF5DoJWRkEdajGJIg">Youtube</a>
            {/*! doesn't work properly
            will fix with feat/socialIntegration
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/viewar/viewar-cli"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a> */}
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        <a
          href="https://viewar.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="viewarLogo"
        >
          <img
            src={`${this.props.config.baseUrl}img/viewar_logo.svg`}
            alt="ViewAR Website"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
