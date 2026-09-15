//the first function

// function dosomething(name) 
// {
//     console.log("hello"+ name);
// }

// dosomething("John");
// dosomething("Doe");

//the second function

// function dosomething(n) 
// {
//     console.log(n);
// }

// dosomething(demo);

// function demo()
// {
//     console.log("chutiya");
// }

// the third function

// function dosomething(n) 
// {
//     n();
// }

// dosomething(demo);

// function demo()
// {
//     console.log("chutiya");
// }

//instand of third we can use 

// function dosomething(n) 
// {
//     n();
// }

// dosomething(function(){
//     console.log("chutiya");
// });

// giving data and getting data back using callback function

// function getuserdata(callback) {

//     let data = [1, 2, 3, 4, 9, 5, 6, 7, 8, 3];

//     callback(data);
// }

// getuserdata(function(userdata) {
//     console.log(userdata);
// });

// console.log("line 1");
// console.log("line 2");
// setTimeout(function() {
//     console.log("line 3");
// }, 3000);
// console.log("line 4");
// console.log("line 5");

// promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.

    // async function getuserdata() 
    // {
    //     const prom = new Promise(function(resolve, reject) {

    //         let user = [{ name: "John", age: 20 }, { name: "Doe", age: 30 }];

    //         if (user.length > 0) {
    //             resolve(user);
    //         } else {
    //             reject("no data found");
    //         }


            
    //     });

    //     return prom;
    // }   


    // getuserdata()
    // .then(function(user) {
    //     console.log(user);
    // })
    // .catch(function(err) {
    //     console.log(err);
    // });
    

    