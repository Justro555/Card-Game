let card=["blue","red","black","orange","teal","yellow","blue",
            "teal","red","yellow","black","orange"];

let randomCardList = [];
var i = 0;
let random = () => {
    while (i < 12) {
        var r = Math.floor(Math.random() * card.length);
        if (checkTwice(card[r])) {
        random();
        } else {
        randomCardList.push(card[r]);
        i++;
        }
        }
            
    }
            
        let checkTwice = (value) => {
        var count = 0;
        for (let index = 0; index < randomCardList.length; index++) {
        if (randomCardList[index] == value) {
        count++;
        }
    }
            
        if (count == 2) {
        return true;
        } else {
        return false;
        }
        }

        function initialload() {

        random();
        for (let index = 0; index < randomCardList.length; index++) {
        document.getElementsByClassName("card")[index].style.backgroundColor =
        randomCardList[index];
        }
        }
            
            var firstClick = "";
            var secondClick = "";
            var clicked = [blue,blue];
            
            function click(obj) {
            
            
                if (firstClick == "") {
                    firstClick == obj.style.backgroundColor;
                    clicked[0] = obj.id;
                } else {
                    secondClick == obj.style.backgroundColor;
                    clicked[1] = obj.id;
                    if (firstClick == secondClick) {
                        document.getElementById("").style.display = "none"
                        document.getElementById("").style.display = "none"
                        firstClick = "";
                        secondClick = "";
                    }
                }
            }
