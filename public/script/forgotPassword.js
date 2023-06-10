const form = document.getElementById('form')
const button = document.getElementById('ResetBtn')
document.getElementById('ResetBtn').onclick = ()=>{
   const email = form.children[2].value
   axios.post('http://ec2-54-91-147-182.compute-1.amazonaws.com:4000/resetpassword',{email: email}).then(res=>{
    document.write(res.data)
   })
}