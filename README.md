# PM-COLLECTIONS

This package is based on **Postman's** postman-collection (https://github.com/postmanlabs/postman-collection). It is intended to be simplistic and to provide intellisense on the collection schema defined by **Postman** (https://schema.getpostman.com/json/draft-07/collection/v2.1.0/).
## Commands

### Watch mode

To develop while building typescript files inside `/src` use

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

### Build for production

To do a one-off build, use

```bash
npm run build # or yarn build
```
This builds to `/dist`.
### Testing

To run tests, use
```bash
npm run test # or yarn test
```
### Linting

To lint code, use
```bash
npm run lint # or yarn lint
```
## Bundle Analysis

To calculate library size, use
```bash
npm run size # or yarn size
```

To visualize bundle, use
```bash
npm run analyze # or yarn analyze
```

## Developers:
It is recommended to run
```bash
npm run lint --fix # or yarn lint --fix
```
before merging to **master** branch.