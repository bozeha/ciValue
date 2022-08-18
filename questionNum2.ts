

const runTimeout = (index: number) => {
    if (index < 10) {
        setTimeout(() => {
            var date = new Date();
            console.log(`index :${index} time :${date.toLocaleString()}`)
            runTimeout(index + 1)
        }, 1000)
    }
}
runTimeout(0)