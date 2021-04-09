# Lighthouse Bulk Checker
Perform lighthouse reports in bulk with this NodeJS script.

## Getting started
1. Download the repo
2. Install dependencies `npm install` or ` yarn`
3. Add the urls you want to check as an array in this file `config/urls.js`
4. (Optional) Add the config you want to test in `config/options.js`. More info [here](https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md)
5. Run `node index.js`

## Reports
When you run the script a report will be created when the script finishes its execution.

IMPORTANT: 
* The script uses lab data from the options that you pass to lighthouse to be emulated
* The output report filename is the current date + lighthouseReport.json (i.e. 09-04-2021-lighthouseReport.json)
* The report is a JSON file

The metrics that we are currently tracking for desktop & mobile devices are:
* Lighthouse score
* Core Web vitals:
  * LCP
  * CLS
  * FID
* FCP
* Speed Index
* Time to interactive

### Output
Here you can see part of a sample report:
```json
{
 "https://skype.en.softonic.com/": {
  "desktop": {
   "lighthouse": 98,
   "fcp": {
    "id": "first-contentful-paint",
    "title": "First Contentful Paint",
    "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).",
    "score": 1,
    "scoreDisplayMode": "numeric",
    "numericValue": 461.97400000000005,
    "numericUnit": "millisecond",
    "displayValue": "0.5 s"
   },
   "lcp": {
    "id": "largest-contentful-paint",
    "title": "Largest Contentful Paint",
    "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)",
    "score": 0.95,
    "scoreDisplayMode": "numeric",
    "numericValue": 997.8340000000001,
    "numericUnit": "millisecond",
    "displayValue": "1.0 s"
   },
   "speedIndex": {
    "id": "speed-index",
    "title": "Speed Index",
    "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).",
    "score": 1,
    "scoreDisplayMode": "numeric",
    "numericValue": 481.902222332824,
    "numericUnit": "millisecond",
    "displayValue": "0.5 s"
   },
   "cls": {
    "id": "cumulative-layout-shift",
    "title": "Cumulative Layout Shift",
    "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).",
    "score": 1,
    "scoreDisplayMode": "numeric",
    "numericValue": 0.00020400031875049805,
    "numericUnit": "unitless",
    "displayValue": "0",
    "details": {
     "type": "debugdata",
     "items": [
      {
       "finalLayoutShiftTraceEventFound": true
      }
     ]
    }
   },
   "fid": {
    "id": "max-potential-fid",
    "title": "Max Potential First Input Delay",
    "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).",
    "score": 0.95,
    "scoreDisplayMode": "numeric",
    "numericValue": 106,
    "numericUnit": "millisecond",
    "displayValue": "110 ms"
   },
   "interactive": {
    "id": "interactive",
    "title": "Time to Interactive",
    "description": "Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).",
    "score": 0.95,
    "scoreDisplayMode": "numeric",
    "numericValue": 2106.2595,
    "numericUnit": "millisecond",
    "displayValue": "2.1 s"
   }
  }
```
