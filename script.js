// your code here

// DATA는 이미 작성된 트윗을 표시합니다.
// console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
// console.log(generateNewTweet());

// document.getElementById('test').innerHTML = 'hello twittler, check developer console!';
const randomtweetbutton = document.querySelector(".randomtweet");
const jsUl = document.querySelector(".replyList");
const jButton = document.querySelector('.tweetButton')
const jGoBack = document.querySelector(".goBack");

function printComment (user) {
    jsUl.innerHTML = '';
    user.forEach(function(userInfo){
        const jUsername = document.createElement("div");
        const jTime = document.createElement("div");
        const jTweet = document.createElement("div");

        jUsername.classList.add("username");
        jTime.classList.add("time");
        jTweet.classList.add("tweet");
        
        jUsername.textContent = userInfo.user;
        jTime.textContent = userInfo.created_at;
        jTweet.textContent = userInfo.message;

        // li 를 하나 만든다.
        const newLi = document.createElement("li");
        // li 에 각각 추가한다.
        newLi.appendChild(jUsername);
        newLi.appendChild(jTime);
        newLi.appendChild(jTweet);
        // li를 ul에 추가한다.
        jsUl.appendChild(newLi);

        jUsername.addEventListener('click', filtering);
    })
}

function checkUsernameAndMessage(username,message){
    if(username === "" || message === ""){
        alert("이름과 메시지를 입력하시오.")
        return false;
    }
    return true;
}

function addTweet () {
    const jInputUsername = document.querySelector('.inputUsername')
    const jInputMessage = document.querySelector('.inputMessage')

    const username = jInputUsername.value;
    const message = jInputMessage.value;
    // 이름과 메시지가 비어있을때 alert()을 주기
    if(!checkUsernameAndMessage(username,message)){
        return false;
    }

    DATA.unshift({
        user : username, 
        message : message, 
        created_at : newTime()})
    printComment(DATA)

    jInputUsername.value = "";
    jInputMessage.value = "";
}

function newTime() {
    const timeStamp = new Date();
    const year = timeStamp.getFullYear();
    let month = timeStamp.getMonth()+1;
    let date = timeStamp.getDate();
    let hour = timeStamp.getHours();
    let minute = timeStamp.getMinutes();
    let second = timeStamp.getSeconds();

    if (month < 10) {
        month = '0' + month
    }

    if (date < 10) {
        date = '0' + date
    }

    if (hour < 10) {
        hour = '0' + hour
    }

    if (minute < 10) {
        minute = '0' + minute
    }

    if (second < 10) {
        second = '0' + second
    }
    return year + '-' + month + '-' + date + ' '+ hour + ':' + minute + ':' + second
}

function filtering(event){
    let filteringArray = DATA.filter(function(userInfo){
        return userInfo.user === event.target.textContent;
    });
    printComment(filteringArray);
}

function generateRandomTweet (){
    let tweet = generateNewTweet();
    DATA.unshift(tweet)
    printComment(DATA)
}

function goBackTweet(){
    printComment(DATA);
}

printComment(DATA);

jButton.onclick = addTweet;
randomtweetbutton.onclick = generateRandomTweet;
jGoBack.onclick = goBackTweet;