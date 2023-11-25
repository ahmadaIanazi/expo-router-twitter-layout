module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // If we use process.env add below (Tamagui)
      // "transform-inline-environment-variables",

      // Required for expo-router
      "expo-router/babel",
      "react-native-paper/babel",
      // This is optional No need for complier if any problem (Tamagui)
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
