function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.querySelector('#name').value || url
    if (Client.urlChecker(formURL))
        fetch(`http://127.0.0.1:8081/api/${encodeURIComponent(formURL)}`)
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('results').innerHTML = Client.ui(res)
            })
    else
        alert('URL is invalid');
}

export { handleSubmit }
