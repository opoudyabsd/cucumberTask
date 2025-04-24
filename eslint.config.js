// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import * as eslintPluginWdio from "eslint-plugin-wdio";
import * as eslintPluginCucumber from "eslint-plugin-cucumber";

export default [
  // Global ignores
  {
    ignores: ["node_modules/", "dist/", "./src/features/"],
  },

  // Base JavaScript configuration + WDIO
  {
    files: ["**/*.js"], // Apply to JS files
    plugins: {
      wdio: eslintPluginWdio,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // Or "commonjs" if you use require/module.exports
      globals: {
        ...globals.node,
        ...globals.mocha, // Defines describe, it, etc.
        // --- Add WDIO and assertion globals ---
        browser: "readonly", // Define browser global
        $: "readonly", // Define $ global
        $$: "readonly", // Define $$ global
        expect: "readonly", // Define expect global (adjust if using a different assertion style)
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...(eslintPluginWdio.configs?.recommended?.rules ?? {}), // Include WDIO rules

      // --- Optional: Adjust wdio/no-pause rule ---
      // 'wdio/no-pause': 'warn', // Set to warning instead of error
      // 'wdio/no-pause': 0, // Disable the rule entirely (not recommended)

      // Add any other custom JS rule overrides here
    },
  },

  // Cucumber configuration for .feature files
  {
    files: ["**/*.feature"], // Target .feature files ONLY
    plugins: {
      cucumber: eslintPluginCucumber,
    },
    // --- Attempt to apply recommended Cucumber rules ---
    // This tells ESLint to use the rules from the plugin for these files.
    // The plugin *should* internally handle parsing Gherkin syntax when its rules are applied.
    // Check eslint-plugin-cucumber docs for the official flat config way if this fails.
    rules: {
      ...(eslintPluginCucumber.configs?.recommended?.rules ?? {}),
    },
    // --- Important Note ---
    // If parsing errors persist, the plugin might require explicit processor configuration,
    // or it might not fully support flat config yet for parsing .feature files.
    // Example (syntax depends on plugin):
    // processor: eslintPluginCucumber.processors[".feature"]
  },
];
