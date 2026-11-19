

function login(username,password){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
        if (password === 'secret_sauce'){
            resolve(`Welcome,${username}`);
        }
        else{
            reject('Invalid password');
        }
    },500);
});
}

async function runLogins(){
    //Login 1 : Succes
const welcome = await login('standard_user','secret_sauce');
console.log(welcome);

//lgin 2 : should fail and be caught
try{
    await login('problem_user','wrong');
}catch(error){
    console.log(`Login Failed:${error}`)
}
}
 runLogins();