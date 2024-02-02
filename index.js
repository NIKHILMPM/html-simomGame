var level = 1;
var arr = [];
count = 0;

$("#playBtn").on("click", function () {

    if (level === 4) {
        $(".head").text("you completed the game");
        $(".jjk").addClass("invisible")
        $(".title").addClass("invisible");
    } else {
        levelHeader();
        $("#playBtn").addClass("invisible");
        pattern(level);
        player();
    }
}

)


function player() {
    $(".box").off("click").on("click", function () {
        var kg = $(this).attr("id");
        checker(kg)
    })

}

function checker(idd) {
    if (count == arr.length) {
        $("#playBtn").removeClass("invisible");
        level = level + 1;
        count = 0;
        arr = [];
    } else if (idd != arr[count]) {
        danger();
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    } else if (idd == arr[count]) {
        playSound(idd);
        count++;
    }

}

function levelHeader() {

    $(".head").text("level: " + level);

}



function danger() {
    $(".box").addClass("danger")
    var s = new Audio("wrong.mp3");
    s.play();
    setTimeout(() => {
        $(".box").removeClass("danger")
    }, 100);
}

function pattern() {
    for (let i = 0; i < 4 * level; i++) {
        setTimeout(function () {
            var n = randomNum();
            var str = noToStr(n);
            arrPush(str);
            playSound(str);
        }, 1000 * i);
    }

}

function playSound(idd) {
    var str = idd.slice(0, -1);

    $("." + str).addClass("flicker")
    var s = new Audio( str + ".mp3");
    s.play();
    setTimeout(() => {
        $("." + str).removeClass("flicker")
    }, 100);

}


function randomNum() {
    var ran = Math.floor(Math.random() * 4) + 1;
    return ran;
}

function noToStr(num) {
    switch (num) {
        case 1:
            return "redd"
        case 2:
            return "greenn"
        case 3:
            return "bluee"
        case 4:
            return "yelloww"
        default:
            break;
    }
}

function arrPush(str) {
    arr.push(str)
}