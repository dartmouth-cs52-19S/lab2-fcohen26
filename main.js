$('#done_button').on('click', function(e) {
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();
    // Adapted from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php
    console.log(choices)
    var highest_count = 0;
    var item_count = 0;
    var item;

    choices.push(choices[1]);
    choices.push(choices[2]);
    choices.push(choices[2]);
    choices.push(choices[3]);
    choices.push(choices[3]);
    choices.push(choices[3]);

    for (var i=0; i<choices.length; i++)
    {
        for (var j=i; j<choices.length; j++)
        {
            if (choices[i] == choices[j])
            {
                item_count++; 
            }
            if (highest_count < item_count)
            {
                highest_count = item_count; 
                item = choices[i];
            }
        }
        item_count=0;
    }
console.log(item+" ( " + highest_count +" times ) ") ;
if (choices.length == 10)
{
    var image = $("img.answer_image");
    image.show();
  if (item == "DartHall") {
      console.log("DartHall")
    $("p.answer_text").html("Dartmouth Hall");
    $("p.answer_blurb").html("You are one of Dartmouth's most iconic buildings! Beautiful, photogenic and historic, you are a core feature of the campus.");

    $("img.answer_image").attr("src", "/img/DartHall.jpg")
    
  }
  if (item == "Rauner") {
    $("p.answer_text").html("Rauner Library");
    $("p.answer_blurb").html("One of the more underrated study spots, you are home to some of the college's rarest and most valuable books and archives.");
    $("img.answer_image").attr("src", "/img/Rauner.jpg")

  }
  if (item == "KAF") {
    $("p.answer_text").html("KAF");
    $("p.answer_blurb").html("Despite your long lines and unpredictable menu changes, you will always remain a campus favorite.");
    $("img.answer_image").attr("src", "/img/KAF.jpg")


  }
  if (item == "Collis") {
    $("p.answer_text").html("Collis");
    $("p.answer_blurb").html("Drawing crowds for lunch, dinner, and late night, you serve as a core gathering place for the campus.");
    $("img.answer_image").attr("src", "/img/Collis.jpg")

  }
  if (item == "Novack") {
    $("p.answer_text").html("Novack");
    $("p.answer_blurb").html("Perfect for a quick bite, you are a popular favorite spot for students. Open all night, you are particularly good at pulling all-nighters.");
    $("img.answer_image").attr("src", "/img/Novack.jpg")

  }
  if (item == "Baker") {
    $("p.answer_text").html("Baker Library");
    $("p.answer_blurb").html("Perhaps the most iconic building on the campus, you stand out and love the spotlight.");
    $("img.answer_image").attr("src", "/img/Baker.jpg")

  }
}else {
    $("p.answer_text").html("Error! Must answer all questions!");
    var image = $("img.answer_image");
    image.hide();
}
});
var modal = document.getElementById('modal');

var btn = document.getElementById("done_button");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    $(modal).animate({
      opacity: 1,
      height: "toggle",
      width: "toggle"
    }, 300, function(){

    });
    $(modal).show();
  };

span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

$(document).ready(function() {
  var header = document.getElementsByClassName("header")
  $(header).animate({
    height: "+=300",
  }, 900, function(){
  });
    $('label').click(function() {
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
        $(this).parent().siblings().children().removeClass("selected");
        $(this).siblings().addClass("unselected");
        $(this).parent().siblings().children().addClass("unselected");
    });
});
