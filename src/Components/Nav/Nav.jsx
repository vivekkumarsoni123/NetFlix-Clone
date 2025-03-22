import './Nav.css';
import { useState,useEffect } from 'react';

const Nav = () => {

    const [show, setshow] = useState(false);

    const scrollHandler = () => {
        if(window.scrollY > 10) {
            setshow(true);
        }else setshow(false);
    }
    useEffect( ()=> {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };

    }, []);



    return <nav style={{
        backgroundColor: show? 'rgb(20,20,20)' : 'transparent',
    }} >
        <section>
            <div className="nav-left">
                <img
                className="logo"
                alt="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"></img>

                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/">TV Shows</a>
                    <a href="/">TV Movies</a>
                    <a href="/">New & Popular</a>
                    <a href="/">My List</a>
                    <a href="/">Browse My Language</a>
                </div>
            </div>

            <div className="nav-right">
            <div class="search-box">                                                          

                <input placeholder="search movies" onkeyup="searchMovie()" id="search" class="search-bar" type="text"/>
                <img onclick="searchMovie()" class="search-icon" src="https://i.pinimg.com/736x/8a/38/97/8a38978ac4d3727e2b9e9d1ae6af34bf.jpg" alt="search-icon"></img>
            </div>
            
            </div>
        </section>
    </nav>
};

export default Nav;



// 2 main popular hooks are usestate and useeffect which we are using here
// useeffect: before anything comes if you want to load or execute anything then useeffect is used
// basic syntax: useEffect( ()=> {
//    },[]); have one function and an array 
// useState: is used to update the value of  a variable if it is updating after the dynamic changes
// basic syntax: const [count, updateCount] = useEffect(1000); it means initially it's count will be 1000 but when 
// the updateCount function will be called then it will be changed. count is variable and updateCount is function
// const func = () => {
//      updateCount(2000);   it will update the value to 2000 now
// }



// PROMISES :------------------------- EITHER RESOLVE OR REJECT
// 
// let firstpromise = new Promise((resolve,reject)=> {
//     setTimeout(function vivek() {
//         console.log("Vivek is here");
//     },10000)
// })

// USE OF MULTIPLE THEN IN PROMISES:-------------------

// let promise1 = new Promise((resolve,reject)=> {
//     let val = true;
//     if(val) {
//         console.log("First msg is resolved");
//         resolve(50);
//     }
//     else {
//         console.log("our message is rejected");
//     }
// })
// promise1.then((message)=> {
//     console.log("Second msg: "+ message);
//     return 10;
// }).then((message)=> {
//     console.log("third msg: "+ message);
// }).finally((message)=> {
//     console.log("main to finally hun to mai to chalunga pakka pakka")
// })
// let promise2 = new Promise((resolve,reject)=> {
//     setTimeout(function vivek() {
//         console.log("myself vivek bro")
//     },2)
// })

// Promise.all([promise2,promise1]).catch((error)=> {
//     console.log("error occured: "+error)
// })