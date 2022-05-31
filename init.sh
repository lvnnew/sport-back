#!/bin/bash

set -e
set -v

yarn global add runlify

# commonInit

yarn ts-node src/init/commonInit.ts
runlify env test yarn ts-node src/init/commonInit.ts
runlify env stage yarn ts-node src/init/commonInit.ts

runlify env prod yarn ts-node src/init/commonInit.ts

# baseInit

yarn ts-node src/init/baseInit.ts
runlify env test yarn ts-node src/init/baseInit.ts
runlify env stage yarn ts-node src/init/baseInit.ts

runlify env prod yarn ts-node src/init/baseInit.ts

# initDev

yarn ts-node src/init/initDev.ts
runlify env test yarn ts-node src/init/initDev.ts
runlify env stage yarn ts-node src/init/initDev.ts

runlify env anna_laznia yarn ts-node src/init/initDev.ts
runlify env yurii_papka yarn ts-node src/init/initDev.ts
runlify env lavrova yarn ts-node src/init/initDev.ts
runlify env annykarimova yarn ts-node src/init/initDev.ts
runlify env cupteaforalice yarn ts-node src/init/initDev.ts
runlify env sanekcetr yarn ts-node src/init/initDev.ts
