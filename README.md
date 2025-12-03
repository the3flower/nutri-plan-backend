# nutri-plan-backend

I will note almost everything

## Setup

### pnpm instead of other

```
pnpm install
pnpm run dev
```

### node version

create `.nvmrc` by

```
node -v > .nvmrc
```

### Build porject by

source: https://expressjs.com/en/starter/generator.html
or: https://medium.com/@gabrieldrouin/node-js-2025-guide-how-to-setup-express-js-with-typescript-eslint-and-prettier-b342cd21c30d

```

npx express-generator

```

note: `npx` mean https://docs.npmjs.com/cli/v8/commands/npx

### Turn to TypeScript

source:
https://blog.logrocket.com/express-typescript-node/

```

npx tsc --init

```

this will create tsconfig.json and official source to read: https://www.typescriptlang.org/tsconfig/
or: https://thiraphat-ps-dev.medium.com/detailed-guide-to-setting-up-your-tsconfig-json-for-typescript-projects-231a8c417aea

uses `tsconfig.json` setup by: https://blog.logrocket.com/express-typescript-node/

### Linting

source: https://eslint.org/docs/latest/use/configure/migration-guide

```

```

### Setup test by Jest

Installation:

```
pnpm install --save-dev jest ts-jest @types/jest
```

## Setup Database

### Prisma

Installation Prisma
source: https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/postgresql

```
pnpm install prisma @types/node @types/pg --save-dev
pnpm install @prisma/client @prisma/adapter-pg pg dotenv
```

and follow steps in that docs

### PostgreSQL in Local with Mac

use brew
check installed fomulae, if not just install it

```
brew list
```

run service:

```
# check services
brew services

# service start
brew services start [service-name]
brew services start postgresql@17
```
