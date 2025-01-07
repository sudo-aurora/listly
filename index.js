let count = 0;

async function incrementCount() {
    await setTimeout(() => {
        console.log(count++);
        incrementCount();  // Continue the cycle
    }, 1000);
}

incrementCount();
