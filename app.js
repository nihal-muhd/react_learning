import React from "react"
import ReactDOM from 'react-dom/client'

const headingChild = React.createElement("h3", null, "Namaste everyone child")
const heading = React.createElement("h1", null, [headingChild])
const heading2 = React.createElement("h2", null, "Namaste everyone-2")
const container = React.createElement("div", {}, [heading, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
