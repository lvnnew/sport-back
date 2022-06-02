#!/bin/bash

set -e
set -v

yarn global add runlify

# commonInit

yarn ts-node src/init/commonInit.ts
runlify start env=test yarn ts-node src/init/commonInit.ts
runlify start env=stage yarn ts-node src/init/commonInit.ts

runlify start env=prod yarn ts-node src/init/commonInit.ts

# baseInit

yarn ts-node src/init/baseInit.ts
runlify start env=test yarn ts-node src/init/baseInit.ts
runlify start env=stage yarn ts-node src/init/baseInit.ts

runlify start env=prod yarn ts-node src/init/baseInit.ts

# initDev

yarn ts-node src/init/initDev.ts
runlify start env=test yarn ts-node src/init/initDev.ts
runlify start env=stage yarn ts-node src/init/initDev.ts

runlify start env=anna_laznia yarn ts-node src/init/initDev.ts
runlify start env=yurii_papka yarn ts-node src/init/initDev.ts
runlify start env=lavrova yarn ts-node src/init/initDev.ts
runlify start env=annykarimova yarn ts-node src/init/initDev.ts
runlify start env=cupteaforalice yarn ts-node src/init/initDev.ts
runlify start env=sanekcetr yarn ts-node src/init/initDev.ts
