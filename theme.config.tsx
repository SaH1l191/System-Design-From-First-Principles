import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
      <span
        style={{
          background: '#e2582a',
          color: '#0a0a0a',
          width: '28px',
          height: '28px',
          borderRadius: '8px',
          display: 'grid',
          placeItems: 'center',
          fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
          fontSize: '0.85em',
          fontWeight: 800,
          lineHeight: 1,
        }}
      >
        S
      </span>
      <span
        style={{
          fontWeight: 700,
          fontSize: '1.05em',
          color: '#f5f1e8',
          letterSpacing: '-0.01em',
        }}
      >
        SDFP
      </span>
    </span>
  ),
  project: {
    link: 'https://github.com/SaH1l191/System-Design-From-First-Principles',
  },
  docsRepositoryBase: 'https://github.com/SaH1l191/System-Design-From-First-Principles/tree/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="System Design from First Principles: A comprehensive, stage-by-stage reference for backend engineers and system design interviews." />
      <meta name="og:description" content="System Design from First Principles: A comprehensive, stage-by-stage reference for backend engineers and system design interviews." />
      <meta name="og:title" content="System Design from First Principles" />
      <meta name="apple-mobile-web-app-title" content="SDFP" />
      <meta name="theme-color" content="#0a0a0a" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/styles.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
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
