import fs from "fs"
import path from "path"
import config from "./src/config.js"

import { ConfigBuilder } from "@xk6-dashboard-assets/view/config"

const file = process.argv[2]

const dir = path.dirname(file)

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

fs.writeFileSync(file, JSON.stringify(ConfigBuilder.build(config), null, 2))
