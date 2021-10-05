const Demo:IDemoFunction = (text, route) => {
    if (text === "function1") {
        route.history.replace("/")
    }
   return 0 
}

export default Demo

