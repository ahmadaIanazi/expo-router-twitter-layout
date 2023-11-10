// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// Annotation for typescript
/** @type {import('expo/metro-config').MetroConfig} */

// Config
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// For Firebase
config.resolver.sourceExts.push('cjs');

// Export
module.exports = config;
