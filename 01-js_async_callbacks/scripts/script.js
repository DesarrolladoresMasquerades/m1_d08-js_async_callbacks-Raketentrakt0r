console.log("JS Loaded")

const h1Tag = document.getElementsByTagName("h1")[0]
/*
setTimeout(
    () => {
        console.log("I am a Pizza")
        h1Tag.innerText += " and I like Pizza"
    },   
    (Math.random() * 5 * 1000) // this is real-time in milliseconds - 
)

setTimeout(
    () => {
        console.log("I am a Polpetta al ragu")
        h1Tag.innerText += " and I also like polpette"
    },   
    (Math.random() * 5  * 1000) // this is real-time in milliseconds - 
)


setTimeout(
    () => {
        console.log("I like Steak")
        h1Tag.innerText += " and I also like Steak"
    },   
    (Math.random() * 3 * 1000) // this is real-time in milliseconds - 
)
*/

// the Time start when the user clicks
function onButton1Click(){
    console.log("Button 1 clicked")
    setTimeout(
    ()=> h1Tag.innerText += " and I like Steak",
    Math.random() * 5 * 1000
    )
    
}

function onButton2Click(){
    console.log("Button 2 clicked")
    setTimeout(
        ()=> h1Tag.innerText += " and I also like Polpette",
        Math.random() * 5 * 1000
        )

}

function onButton3Click(){
    console.log("Button 3 clicked")
    setTimeout(
        ()=> h1Tag.innerText += " and I like Pizza",
        Math.random() * 5 * 1000
        )       
}

// ------ timer -------
const counter = document.getElementById("counter")

const myInterval = setInterval( 
    ()=> counter.innerText = parseInt (counter.innerText) + 1,
    1 * 1000
)
// -------stop the time with precise time
const stopCounter = setInterval(
    () => {counter.innerText = parseInt(counter.innerText) + 1
        if(counter.innerText === 3){
            clearInterval(counter)
        }
    }, 1 * 1000

);

// ------- stop the clock
const stopCounter = () => clearInterval(myInterval)
