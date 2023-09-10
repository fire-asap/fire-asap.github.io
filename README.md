# fire-asap.github.io

## new calculation
x=sum((x1-means)*(scaling))
dist0 = parx - x*dm
dist1 = exp(-(dist0 - min(dist0)))
posterior = dist1/sum(dist1)

1. get all the 17 results and save them to array `selections`, value pattern `{name: <varName>, val: <value>}`
2. reducer the array to get its sum(assigned to `x`) by the following statement 
```javascript
// constants `means`   `scalings` are provided already
const x = selections.reducer((prev, curr) => {
    const {name,val} = curr;
    const currMean = means[name];
    const currScaling = scalings[name];
    const currResult = (val - currMean) * currScaling;
    return prev + currResult;
}, 0)
```
3. calculate `dist0` and then `dist1` by the following statements
```javascript
// const `parx` and `dm` are provided
  const tmp = dm.map(item => item * x);
  const dist0 = parx.map((item, idx) => item - tmp[idx]);

  const minDist0Item = Math.min(...dist0);

  const dist1 = dist0.map(item => {
    const power = (item - minDist0Item) * -1; // result is <= -0
    return Math.exp(power);
  });

  const sumDist1 = dist1.reduce((prev, curr) => prev + curr, 0);

  const posterior = dist1.map(item => {
    const realResult = item / sumDist1;
    return realResult.toFixed(13);
  });
// if posterior[0] > posterior[1] then show 'Absence of DTE'
```
