const up = [
    {
    username: "user1",
    password: "passwd1"
    },
    {
        username: "user2",
        password: "passwd2"
    },
    {
        username: "user3",
        password: "passwd3"
    },
    {
        username: "user4",
        password: "passwd4"
    },
    {
            username: "user5",
            password: "passwd5"
        },
        {
            username: "user6",
            password: "passwd6"
        },
        {
            username: "user6",
            password: "passwd6"
        },
        {
            username: "user7",
            password: "passwd7"
        },
        {
            username: "user8",
            password: "passwd8"
        },
        {
            username: "user9",
            password: "passwd9"
        },
        {
            username: "user10",
            password: "passwd10"
        },
    ]
    let c=0;
    function validate () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    for( let i=0; i < 11; i++){
        
        if ( username === up[i].username && password === up[i].password){
            c=1;
            break;
            }
       
        }
        if(c){
            alert("Log in succesfull!");
            window.location = "success.html";
        }
        else{
            alert("incorrect username or password");
        }
}
