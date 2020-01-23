// your code here

// DATA는 이미 작성된 트윗을 표시합니다.
// console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
// console.log(generateNewTweet());

// document.getElementById('test').innerHTML = 'hello twittler, check developer console!';
const randomtweetbutton = document.querySelector(".randomtweet");
const jsUl = document.querySelector(".replyList");
const jButton = document.querySelector('.tweetButton')

function printComment (user) {
    jsUl.innerHTML = '';
user.forEach(function(userInfo){
  // username html 태그를 만든다
  const jUsername = document.createElement("div");
  jUsername.classList.add("username");
  // time html 태그를 만든다
  const jTime = document.createElement("div");
  jTime.classList.add("time");
  //jTime.setAttribute("datetime", userInfo.created_at);
  // tweet html 태그를 만든다
  const jTweet = document.createElement("div");
  jTweet.classList.add("tweet");
  
  // username 태그에 userInfo.user 담는다.
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

  jUsername.addEventListener('click', filtering)
})
}

printComment(DATA);

function addTweet () {
    const jInputUsername = document.querySelector('.inputUsername')
    const jInputMessage = document.querySelector('.inputMessage')
    
    // const jInputUserTag = document.createElement('a')
    // jInputUserTag.textContent = jInputUsername.value;

    // const jInputMessageTag = document.createElement('div')
    // jInputMessageTag.textContent = jInputMessage.value;
    
    // const jInputTimeTag = document.createElement('div')
    // jInputTimeTag.textContent = newTime();

    // const newLi = document.createElement("li");
    // // li 에 각각 추가한다.
    // newLi.appendChild(jInputUserTag);
    // //newLi.appendChild(Date.now());
    // newLi.appendChild(jInputTimeTag);
    // newLi.appendChild(jInputMessageTag);
    // // li를 ul에 추가한다.
    // jsUl.appendChild(newLi);


    DATA.unshift({user : jInputUsername.value, message : jInputMessage.value, created_at : newTime()})
    printComment(DATA)
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
 //   console.log(event.target.text)
    let filteringArray = DATA.filter(function(userInfo){
        return userInfo.user === event.target.text
    })
    
    printComment(filteringArray)
}

function generateRandomTweet (){
    let tweet =  generateNewTweet();
    DATA.unshift(tweet)
    printComment(DATA)
}

jButton.onclick = addTweet;
randomtweetbutton.onclick = generateRandomTweet;

// jQuery(document).ready(function() {
//   $("time.timeago").timeago();
// });