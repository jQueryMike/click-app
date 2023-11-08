## Click App

A mock vehicle management app that pulls data from a json file held in the public folder.

## Improvements and Additions 

### Backend
I would look to replace json file data with an API call to a data endpoint and switch to server actions for CRUD.

### favicon.ico
Time was spent to fix the favicon, currently it is not resolving, more time is needed but considered low priority.

### Audit Log
State is initialised and populated that holds a history of actions that take place on vehicle data, this is currently logged to the console on change. With more time this would be utilised to show notifications after crud actions and displayed as a feature within a separate table in the app.

### Form Validation
Currently all form fields validate text type inputs. This should be updated to allow validation of the number fields specifically, and also other field types (upload etc).

### Comments
Comments have been added to VehicleManagerHook and utils functions but could be used more widely.


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

