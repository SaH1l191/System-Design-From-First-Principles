import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 800, fontSize: '1.2em' }}>
      SD<span style={{ color: '#6366f1' }}>FP</span>
    </span>
  ),
  project: {
    link: 'https://github.com/SaH1l191/sys-design-site',
  },
  docsRepositoryBase: 'https://github.com/SaH1l191/sys-design-site/tree/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="System Design from First Principles: A comprehensive, stage-by-stage reference for backend engineers and system design interviews."
      />
      <meta
        name="og:description"
        content="System Design from First Principles: A comprehensive, stage-by-stage reference for backend engineers and system design interviews."
      />
      <meta name="og:title" content="System Design from First Principles" />
      <meta name="apple-mobile-web-app-title" content="SDFP" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  footer: {
    component: () => null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – System Design from First Principles',
    }
  },
}

export default config
