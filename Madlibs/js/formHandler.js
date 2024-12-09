
console.log("ambot");

function write(){
    console.log("write function is functional");

    var verb = document.getElementById('verb').value;
    var adj = document.getElementById('adjective').value;
    var verb2 = document.getElementById('verb2').value;
    var verb3 = document.getElementById('verb3').value;
    var noun = document.getElementById('noun').value;
    var place = document.getElementById('place').value;
    var ptVerb = document.getElementById('verb4').value;
    var body = document.getElementById('body').value;
    var emotion = document.getElementById('emotion').value;
    var noun2 = document.getElementById('noun2').value;

    var story = document.querySelector('input[name="option"]:checked').value;

    console.log(verb);
    console.log(adj);
    console.log(verb2);
    console.log(verb3);
    console.log(noun);
    console.log(place);
    console.log(ptVerb);
    console.log(body);
    console.log(emotion);
    console.log(noun2);
    console.log(story);

    var storyMessage;

    if(story=="yes"){
        storyMessage = "We talked all night.";
    }else if(story=="no"){
        storyMessage = "But, she did not believe me.";
    }else if(story=="maybe"){
        storyMessage = "She let me in and gave me a drink.";
    }else if(story=="comment"){
        storyMessage = "She looked at me with blank stare.";
    }

    console.log(storyMessage);

    document.getElementById('output').innerHTML = "Please <b>"+verb+"</b> me. No one believes me, and that thing is on me! It is driving me <b>"+adj+"</b>. I do not know what to do anymore. I do not know what is going to happen to me or if Iam even alive tomorrow, but I want you to know and everyone to know my story. Last night a I was <b>"+verb2+"</b> home that night, I was actually <b>"+verb3+"</b> to your podcast over the radio. It was a long ride and I was already feeling quite sleepy but then all of sudden a <b>"+noun+"</b> appeared in front of the <b>"+place+"</b> and I hit her I honestly did not mean it, but suddenly <b>"+ptVerb+"</b> my car and went to find her, but I did not find anyone <b>"+body+"</b>. It was so weird. I felt so <b>"+emotion+"</b> and I drove straight to my <b>"+noun2+"</b> house and tell her what happened. "    +storyMessage+''

}
