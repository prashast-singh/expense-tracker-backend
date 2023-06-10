let form = document.getElementById('signUpForm')

form.addEventListener('submit', addUser)

function addUser(e){
    e.preventDefault();
    myObj = {
        name: form.children[1].value,
        email: form.children[3].value,
        password: form.children[5].value
    }

    axios.post('http://ec2-54-91-147-182.compute-1.amazonaws.com:4000/user',{myObj})
            .then(e=> {
           location.reload()
            })
            .catch(err => {
             let errPara=   document.createElement('p');
             errPara.appendChild(document.createTextNode("Error: " + err));
             form.appendChild(errPara)
            })
}

//JSON.stringify(err.response.data.err)