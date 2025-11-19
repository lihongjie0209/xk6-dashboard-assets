import { readFileSync } from "fs"
import { gunzipSync, gzipSync } from "zlib"

import config from "../config/dist/config.json"

let testdata = ""

if (process.env.NODE_ENV != "production") {
  let data = readFileSync(".testdata.ndjson.gz")
  let text = gunzipSync(Buffer.from(data, "base64")).toString("utf8")

  let conf = { event: "config", data: config }

  testdata = gzipSync(JSON.stringify(conf) + "\n" + text).toString("base64")
}

export default { testdata }
