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

put this in terminal(mac) `nano ~/.zshrc`
source: brew info postgresql

```
export PATH="/opt/homebrew/opt/postgresql@17/bin:$PATH"

export LDFLAGS="-L/opt/homebrew/opt/postgresql@17/lib"
export CPPFLAGS="-I/opt/homebrew/opt/postgresql@17/include"
```

restart terminal: `source ~/.zshrc`

After this you need to prepare username, password, and create database for the project.
fyi: this is local database setup

access local postgresql:

```
psql -U [username] [database-name]
```

## Prisma

setup:
please follow documentation
source: https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/postgresql

prisma cli by prefix `npx`

```
npx prisma
```

command to generate `prisma.config.ts` and `schema.prisma`
this will be point to directory that migration file create til variable or url that use database

```
npx prisma init --datasource-provider postgresql --output ../generated/prisma
```

Define model details in `schema.prisma`

after you define model details and ready to create migration file and prisma client

create migration file:

```
npx prisma migrate dev --name init
```

generate prisma client:

```
npx prisma generate
```

create directory and file `/lib/prisma.ts`, export adapter(follow prisma doc)
source: https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/postgresql#7-instantiate-prisma-client

```
import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }
```
