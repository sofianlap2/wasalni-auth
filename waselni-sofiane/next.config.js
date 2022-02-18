module.exports = {
  images: {
    path: 'https://res.cloudinary.com/dnba3zc9i/image/upload/',
    loader: 'cloudinary'
  },
  compilerOptions:{
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/home': { page: '/home' },
      '/conductor': { page: '/conductor' },
      '/destination': { page: '/destination' },
      '/pickups': { page: '/pickups' },
      '/requests': { page: '/requests' },
      '/settings': { page: '/settings' },
    }
  },
};