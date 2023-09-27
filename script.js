let result =
{
    "tag": "",
    "free": true,
    "role": false,
    "user": "premsarkar4o4",
    "email": "premsarkar4o4@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    console.log("Clicked");

    resultCont.innerHTML = '<img src="loading.gif" width ="50vw" alt="Loading">'
    let key = "ema_live_AmiWUCFQGPT3c9b8DJsiPPoQ7Us2Q7pFNUhXvM1d"

    let email = document.getElementById("exampleInputEmail1").value;

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res = await fetch(url)
    let result = await res.json()


    let str = ''
    for (key of Object.keys(result)) {

        if (result[key] !== "" && result[key] != " ") {
            str = str + `<div>${key} : ${result[key]}</div>`
        }

    }

    console.log(str);
    resultCont.innerHTML = str;

})
