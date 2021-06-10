module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/services': { page: '/services' },
      '/nft': { page: '/nft' },
      '/blog': { page: '/blog' },
      '/gallery': { page: '/gallery' },
      '/terms-of-sale': { page: '/terms-of-sale' },
      '/contact': { page: '/contact' },
      '/about': { page: '/about' },
     
    }
  },
  images: {
    domains: ["files.cdn.printful.com"],
    loader: 'cloudinary',
    
  },
  rules: [{
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      'file-loader',
      {
        loader: 'cloudinary',
        options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true, // webpack@2.x and newer
        },
      },
    ],
  }]
};
