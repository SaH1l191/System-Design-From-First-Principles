import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  globalStyles: './styles/globals.css',
})

export default withNextra({ 
  images: {
    unoptimized: true,
  },
})
