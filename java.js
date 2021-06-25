
var countByThree = 3;
var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var i = 0;
var b = "ABCDEF";

function isNumCorrect(e){
    if(e.keyCode == 13){
        var n = document.getElementById("cbtNumber").value;
        document.getElementById("cbtP2").innerHTML = "";

        if(n == countByThree){
            document.getElementById("cbtP1").innerHTML = n;
            countByThree += 3;
        }
        else{
            document.getElementById("cbtP2").innerHTML = "Incorrect! Try again!";
        }

        document.getElementById("cbtNumber").value = "";
    }
}

function isCharCorrect(e){

    if(e.keyCode == 13){
        var c = document.getElementById("azgfChar").value;

        if(c.charAt(0) == a.charAt(i) || (c.charCodeAt(0) - 32) == a.charCodeAt(i)){
            document.getElementById("azgfP1").innerHTML = c;

            if(c.charCodeAt(0) > 96 && c.charCodeAt(0) < 121){
                var d = String.fromCharCode((c.charCodeAt(0) - 32)) + (c.substring(1, c.length));
                var p = document.createElement("p");
                p.innerHTML = d;
                document.body.appendChild(p);
                p.id = "azgfNewP";
                i++;
            }
            else{
                var p = document.createElement("p");
                p.innerHTML = c;
                document.body.appendChild(p);
                p.id = "azgfNewP";
                i++;
            }

            if(i == 26){
                document.getElementById("azgfP1").innerHTML = "You made it through the alphabet! Feel free to refresh and play again or use another tool on the website.";
            }
        }
        else{
            document.getElementById("azgfP1").innerHTML = "Starts with the wrong letter! Try again!";
        }

        document.getElementById("azgfChar").value = "";
    }
}

function isCharCorrectTwo(e){

    if(e.keyCode == 13){
        var c = document.getElementById("azTwoChar").value;

        if(c.charAt(0) == a.charAt(i) || (c.charCodeAt(0) - 32) == a.charCodeAt(i)){
            document.getElementById("azTwoP").innerHTML = "Your Word: " + c;

            if(c.charCodeAt(0) > 96 && c.charCodeAt(0) < 121){
                var d = String.fromCharCode((c.charCodeAt(0) - 32)) + (c.substring(1, c.length));
                var p = document.createElement("p");
                p.innerHTML = d;
                document.body.appendChild(p);
                p.id = "azTwoP";
                document.getElementById("azTwoChar").value = "";
                i++;
                setTimeout(function () {
                    computerTurn();
                }, 1000);
                
            }
            else{
                var p = document.createElement("p");
                p.innerHTML = c;
                document.body.appendChild(p);
                p.id = "azTwoP";
                document.getElementById("azTwoChar").value = "";
                i++;
                setTimeout(function () {
                    computerTurn();
                }, 1000);
            }
        }
        else{
            document.getElementById("azTwoP").innerHTML = "Starts with the wrong letter! Try again!";
        }
    }
}

function computerPhrase(){
    var phrases = ["Bacon", "Black Beans", "Bagel", "Barley", "Bisque", "Bread", "Broccoli", "Buritto",
                    "Duck", "Dumpling", "Donut", "Fajita", "Falafel", "Fish", "Fondu", "French Toast",
                    "Ham", "Honey", "Hash Brown", "Hot Dog", "Hummus", "Jelly", "Jerky", "Jalapeno",
                    "Lobster", "Lam", "Lasagna", "Noodles", "Nutmeg", "Pizza", "Pepperoni", "Pancakes",
                    "Rasberry", "Roll", "Ranch", "Tater Tots", "Toast", "Vinegar", "Venison", "Xantham Gum", "Zucchini"];
    return phrases[Math.floor(Math.random()*phrases.length)];
}

function computerTurn(){
    var bool = true;
    var compChar = computerPhrase();
    while(bool){
        if(compChar.charAt(0) == a.charAt(i)){
            document.getElementById("azTwoP").innerHTML = "Computer's Word: " + compChar;
            var p = document.createElement("p");
            p.innerHTML = compChar;
            document.body.appendChild(p);
            p.id = "azThreeP";
            document.getElementById("azTwoChar").value = "";
            i++;
            bool = false;

            if(i == 26){
                document.getElementById("azTwoP").innerHTML = "You made it through the alphabet! Feel free to refresh and play again or use another tool on the website.";
            }
        }
        else{
            compChar = computerPhrase();
        }
    }
}

function cbt(e){
    if(e.keyCode == 13){
        var userRes = document.getElementById("cbtType").value;
        var p = document.createElement("p");
        p.innerHTML = userRes;
        p.id = "cbtNewP";
        document.body.appendChild(p);
        document.getElementById("cbtType").value = "";
        i++;

        if(i == 0){
            cbtA();
        }
        else if(i == 1){
            cbtB();
        }
        else if(i == 2){
            cbtC();
        }
        else if(i == 3){
            cbtD();
        }
        else if(i == 4){
            cbtE();
        }
        else{
            cbtF();
        }
    }
}

function cbtA(){
    document.getElementById("cbtH2").innerHTML = b.charAt(i);
    document.getElementById("cbtP2").innerHTML = "Antecedent: What is the action or event the triggered your anxiety?";
}

function cbtB(){
    document.getElementById("cbtH2").innerHTML = b.charAt(i);
    document.getElementById("cbtP2").innerHTML = "Behavior: What are your thoughts about this event? What is going through your mind?";
    document.getElementById("cbtType").value = "Example: I feel I am not smart enough.";
}

function cbtC(){
    document.getElementById("cbtH2").innerHTML = b.charAt(i);
    document.getElementById("cbtP2").innerHTML = "Consequences: What are the mental, emotional, or physical consequences of your behavior(s)?";
    document.getElementById("cbtType").value = "Example: I am wringing my hands because of my thoughts.";
}

function cbtD(){
    document.getElementById("cbtH2").innerHTML = b.charAt(i);
    document.getElementById("cbtP2").innerHTML = "Detective Work: Fact find. Are the things your brain is telling you actually true?";
    document.getElementById("cbtType").value = "Example: I am doing my best. I still have a B in the class.";
}

function cbtE(){
    document.getElementById("cbtH2").innerHTML = b.charAt(i);
    document.getElementById("cbtP2").innerHTML = "End Result: Change our unhelpful thoughts into neutral or positive.";
    document.getElementById("cbtType").value = "Example: I have determined that I am a hard-working student.";
}
function cbtF(){
    document.getElementById("cbtH2").innerHTML = "Congratulations! You completed a CBT journal entry!";
    document.getElementById("cbtP2").innerHTML = "";
}

