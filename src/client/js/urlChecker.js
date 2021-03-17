function urlChecker(inputText) {
    return /^(http?s:\/\/)?([-A-Za-z0-9+&@#\/%?=~_|!:,.;])+(\.)+[-A-Za-z0-9+&@#\/%=~_|?]+/gm.test(inputText);
}

export { urlChecker }
