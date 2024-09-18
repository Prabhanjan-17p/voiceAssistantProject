let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let gif = document.querySelector("#VoiceAssist")

function speak(text) {
    let text_speech = new SpeechSynthesisUtterance(text)
    text_speech.volume = 1
    text_speech.rate = 1
    text_speech.pitch = 1
    //change voice
    text_speech.lang="hi-GB"

    //create for speak
    window.speechSynthesis.speak(text_speech)
}

// Assistant wish me Functions
function WishMe(){
    // geting real time date and time
    let today = new Date();
    // getting current hour
    let hour = today.getHours();
    let wish
    if (hour >= 0 && hour < 12) {
        wish = "Good Morning"
    } else if (hour >= 12 && hour < 18) {
        wish = "Good Afternoon"
    } else {
        wish = "Good Evening"
    }
    speak(wish + " sir!")
}

// whene evrer the page is loaded it can wish you
// window.addEventListener('load',()=>{
//     WishMe()
// })

let speachRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speachRecognition()
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex 
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    // console.log(event)
    tekeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display = "none"
    gif.style.display = "block"
})
 
function tekeCommand(message){
    btn.style.display = "flex"
    gif.style.display = "none"
    if(message.includes("hello") || message.includes("hey")){
        speak("Hello sir! what can i help you?")
    }else if(message.includes("Who are you?")){
        speak("i am virtual assistant , created by Pravanjan Sir")
    }
    else if(message.includes("open youtube")){
        window.open("https://www.youtube.com/")
        speak("opening youtube")
    }
    else if(message.includes("open instagram")){
        window.open("https://www.instagram.com/")
        speak("opening instagram")
    }
    else if(message.includes("open facebook")){
        window.open("https://www.facebook.com/")
        speak("opening facebook")
    }
    else if(message.includes("open google")){
        window.open("https://www.google.co.in/")
        speak("opening google")
    }
    else if(message.includes("open telegram")){
        window.open("https://www.telegram.com/")
        speak("opening telegram")
    }
    else if(message.includes("open calculator")){
        window.open("calculator://")
        speak("opening calculator")
    }
    else{
        let FinalText = "this is what i found on internet regarding" + message.replace("jarvish","")
        speak(FinalText)
        window.open(`https://www.google.com/search?q=${message.replace("jarvish","")}`)
    }
  
}
