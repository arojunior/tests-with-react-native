# Tests with react-native

Just some experiments with test tools for react-native

### with detox

**Setup**
To use Detox in OSX you need to follow the (Getting started)[https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md] guide (Step 1, items 3 and 4).

Detox has some bugs, some weird behaviors, so you need to be patience.
If you get errors in test telling "Failed to type string ..., because keyboard was not shown on screen." then you need to enabled the keyboard on simulator.
Also, sometimes the tests just crash with messages like "detox[5438] ERROR: [exec.js/EXEC_FAIL, #4]" and "detox[5438] ERROR: [index.js/DETOX_INIT_ERROR]", but if you try again it just works... another weird behavior.

**Running tests**
```sh
detox build
detox test
```

### with enzyme

```sh
yarn test
```
