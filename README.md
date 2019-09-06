# lodash-webpack-bundle-size
Simulating different approaches for code-splitting lodash. 

In [index.js](./index.js), both `lodash` & `lodash-es` dependencies are used for simulating code-splitting with different **webpack** configurations.

## webpack configurations
Four webpack configurations are used to see which config approach yields the best results. Each configuration is also accompanied by a `webpack-bundle-analyzer`-report which can be found in the [dist](./dist)-folder.

These are the 4 configurations:
* non optimized
* lodash babel plugin
* lodash webpack plugin
* combination of babel and webpack plugins

### 1. Non optimized
Only entry & output properties are used in [non-optimized config](./webpack.config.js#L5).

### 2. Babel plugin
Only `babel-plugin-lodash` is used in this [config with babel plugin](./webpack.config.js#L19).

### 3. webpack plugin
Only `lodash-webpack-plugin` is used in this [config with webpack plugin](./webpack.config.js#L47).

### 4. Combination of Babel & webpack plugins
A combination of `babel-plugin-lodash` and `lodash-webpack-plugin` is used in this [config with babel and webpack plugins](./webpack.config.js#L62).

## Results

|Config|File|Size|
|---|---|---:|
|babel and webpack plugin|[dist/babel-webpack.js](./dist/babel-webpack.js)|1.93 KB|
|babel plugin|[dist/babel.js](./dist/babel.js)|21.90 KB|
|webpack plugin|[dist/webpack.js](./dist/webpack.js)|71.50 KB|
|non optimized|[dist/non-optimized.js](./dist/non-optimized.js)|79.60 KB|

### Warning
The configuration where both babel and webpack plugins are used, result in a staggering small bundle size. The reason why is because a lot of behind-the-scene features of lodash are removed by the `lodash-webpack-plugin`, which explains the big savings.

Here's a full list of features that are disabled by `lodash-webpack-plugin`:
[github.com/lodash/lodash-webpack-plugin#feature-sets](https://github.com/lodash/lodash-webpack-plugin#feature-sets).

You can choose to opt-in to certain features like this:
```
new LodashModuleReplacementPlugin({
  collections: true,
  paths: true
});
```
