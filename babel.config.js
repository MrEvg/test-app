module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@app': './src/app',
          '@features': './src/features',
          '@pages': './src/pages',
          '@routing': './src/routing',
          '@shared': './src/shared',
          '@widgets': './src/widgets',
        },
      },
    ],
  ],
};
