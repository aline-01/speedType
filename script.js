const TEST_TEXT = document.querySelector("#or-text")
const CUSTOM_TEXT = document.querySelector("#cst")
const TEST_AREA = document.querySelector("#test-area")
const TIMER = document.querySelector(".timer")
const RESTART = document.querySelector("#reset")
const TEST_WRAPER = document.querySelector(".test-wrapper")

//global variable
timer = [0,0,0,0]
var run_one_timer = true
var interval
var validation_end = false

//create random text
function create_text() {
    let text1 = "i hate when i can't hold my loneless"
    let text2 = "who am i tell me"
    let text3 = "we are anonymous"
    let text4 = "we are hacker and hacker have black terminal with green font color"
    let text5 = "why hackers is sad"
    let text6 = "where is my mind"
    let text_array = [text1,text2,text3,text4,text5,text6]
    let rand_number = Math.floor(Math.random() * text_array.length)
    return text_array[rand_number]
}

TEST_TEXT.innerHTML = create_text()

//take custom text
CUSTOM_TEXT.addEventListener("click",(custom_text)=>{
     cst_text = prompt("enter your text")
     if (cst_text.length == 0) {
       return
     }else {
       TEST_TEXT.innerHTML = cst_text
     }
     CUSTOM_TEXT.style.display = "none"
},false)

//loading zero
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

//start the timer
function start_timer() {
  let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  TIMER.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

//validation the text
function validation_text() {
  let split_text = TEST_TEXT.innerHTML.slice(0,TEST_AREA.value.length)
  if (TEST_TEXT.innerHTML == TEST_AREA.value) {
    TEST_WRAPER.style.borderColor = "green"
    clearInterval(interval)
  }else if (TEST_AREA.value == split_text) {
    TEST_WRAPER.style.borderColor = "yellow"
  }else {
    TEST_WRAPER.style.borderColor = "red"
  }
}

//runing test after type
TEST_AREA.addEventListener("keyup",(key_press)=>{
     validation_text()
     CUSTOM_TEXT.style.display = "none"
     if (run_one_timer) {
       interval = setInterval((e)=> {
         start_timer()
       },10)
       run_one_timer = false
     }
},false)

//for restart the program
RESTART.addEventListener("click",(reset)=>{
    path_program = window.location.href
    window.location.href = path_program
},false)
