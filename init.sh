#!/bin/bash

set -e
set -v

yarn global add runlify

# commonInit

yarn ts-node src/init/commonInit.ts
runlify start test yarn ts-node src/init/commonInit.ts
runlify start stage yarn ts-node src/init/commonInit.ts

runlify start prod yarn ts-node src/init/commonInit.ts

# baseInit

yarn ts-node src/init/baseInit.ts
runlify start test yarn ts-node src/init/baseInit.ts
runlify start stage yarn ts-node src/init/baseInit.ts

runlify start prod yarn ts-node src/init/baseInit.ts

# initDev

yarn ts-node src/init/initDev.ts
runlify start test yarn ts-node src/init/initDev.ts
runlify start stage yarn ts-node src/init/initDev.ts

runlify start anna_laznia yarn ts-node src/init/initDev.ts
runlify start yurii_papka yarn ts-node src/init/initDev.ts
runlify start lavrova yarn ts-node src/init/initDev.ts
runlify start annykarimova yarn ts-node src/init/initDev.ts
runlify start cupteaforalice yarn ts-node src/init/initDev.ts
runlify start sanekcetr yarn ts-node src/init/initDev.ts
