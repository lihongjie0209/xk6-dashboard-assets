import React from "react"
import { render } from "preact"
import "uplot/dist/uPlot.min.css"

import digest from "utils/digest"
import App from "App"

const rootElement = document.getElementById("root") as HTMLDivElement
digest().then((d) => render(<App digest={d} />, rootElement))
