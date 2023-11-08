## Click App

A mock vehicle management app that pulls data from a AI generated json file of vehicles held in the public folder. This data is then held in memory and accessed and modified via the vehicle manager context and hook. Changes to data are not persisted on refresh and will reload from initial json file.

## Improvements and Additions 

### Backend
I would look to replace json file data with an API call to a data endpoint and switch to server actions for CRUD.
Use ISR (Incremental Static Regeneration) to pregenerate individual vehicle pages that could be regenerated only on vehicle field change.

### favicon.ico
~~Time was spent to fix the favicon, currently it is not resolving, more time is needed but considered low priority.~~ - Fixed

### Audit Log
State is initialised and populated that holds a history of actions that take place on vehicle data, this is currently logged to the console on change. With more time this would be utilised to show notifications after crud actions and displayed as a feature within a separate table in the app.

### Form Validation
Currently all form fields validate text type inputs. This should be updated to allow validation of the number fields specifically, and also other field types (upload etc).

### Comments
Comments have been added to VehicleManagerHook and utils functions but could be used more widely.

### Other
The app is currently limited to cars, this could be expanded to include other vehicle types. The fields in the vehicle object could be expanded to include images.


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

To run all tests once
```bash
yarn test:ci
```

To run tests with watch
```bash
yarn test
```

