 const user = {username:'standard_user',password:'secret_sauce'};
 console.log(user.username);
 console.log(user.password);

 //Destructuring
 const {username,password} = user;
 console.log(`${username}/${password}`);

 //spread ...
 const admin ={...user,role:'admin'};
 console.log(admin);

 console.log(user.role ??'guest');

 //const users = {{username:'Sruthi',password:'gu'},{username:'laya',password:'ha'}};
 //console.log(users.username);
{
 const loginAttempt ={username:'standard_user',password:'secret_sauce',attempts:2}; 
 const {username,attempts} = loginAttempt;
 console.log(`${username} has tried ${attempts} time(s)`);
}
{
 const config = {baseUrl:'https://google.com',timeout:'30000'};

 const slowconfig ={...config,timeout:60000};
 console.log(slowconfig.timeout);
}
{
 const user1 = {username : 'Harry'};
 console.log (user1.password ?? 'no password set');
}