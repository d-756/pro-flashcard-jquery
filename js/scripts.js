$(function () {
  const data = {
    "Flash Card Two": [
      {
        Entry: {
          id: "154",
          created: "2021-11-08 03:31:47",
          modified: "2021-11-08 03:34:18",
          project_id: "18",
          user_id: "1",
          entry: "For Clash card Two ",
          processed: true,
          action: false,
          discover_question_id: null,
          discover_skiff_id: null,
        },
      },
      {
        Entry: {
          id: "155",
          created: "2021-11-08 03:31:52",
          modified: "2021-11-08 03:34:18",
          project_id: "18",
          user_id: "1",
          entry: "For Flash Card Two #2",
          processed: true,
          action: false,
          discover_question_id: null,
          discover_skiff_id: null,
        },
      },
    ],
    "Flash Card One": [
      {
        Entry: {
          id: "152",
          created: "2021-11-08 03:31:34",
          modified: "2021-11-08 03:34:18",
          project_id: "18",
          user_id: "1",
          entry: "For Flash Card One",
          processed: true,
          action: false,
          discover_question_id: null,
          discover_skiff_id: null,
        },
      },
      {
        Entry: {
          id: "153",
          created: "2021-11-08 03:31:43",
          modified: "2021-11-08 03:34:18",
          project_id: "18",
          user_id: "1",
          entry: "For Flash Card one #2",
          processed: true,
          action: false,
          discover_question_id: null,
          discover_skiff_id: null,
        },
      },
    ],
    "Flash Card Three": [
      {
        Entry: {
          id: "152",
          created: "2021-11-08 03:31:34",
          modified: "2021-11-08 03:34:18",
          project_id: "18",
          user_id: "1",
          entry: "For Flash Card Three",
          processed: true,
          action: false,
          discover_question_id: null,
          discover_skiff_id: null,
        },
      },
      {
        Entry: {
          id: "153",
          created: "2021-11-08 03:31:43",
          modified: "2021-11-08 03:34:18",
          project_id: "18",
          user_id: "1",
          entry: "For Flash Card three #2",
          processed: true,
          action: false,
          discover_question_id: null,
          discover_skiff_id: null,
        },
      },
    ],
    "Flash Card Four": [
      {
        Entry: {
          id: "152",
          created: "2021-11-08 03:31:34",
          modified: "2021-11-08 03:34:18",
          project_id: "18",
          user_id: "1",
          entry: "For Flash Card Four",
          processed: true,
          action: false,
          discover_question_id: null,
          discover_skiff_id: null,
        },
      },
      {
        Entry: {
          id: "153",
          created: "2021-11-08 03:31:43",
          modified: "2021-11-08 03:34:18",
          project_id: "18",
          user_id: "1",
          entry: "For Flash Card four #2",
          processed: true,
          action: false,
          discover_question_id: null,
          discover_skiff_id: null,
        },
      },
    ],
    "Flash Card Five": [
      {
        Entry: {
          id: "152",
          created: "2021-11-08 03:31:34",
          modified: "2021-11-08 03:34:18",
          project_id: "18",
          user_id: "1",
          entry: "For Flash Card Five",
          processed: true,
          action: false,
          discover_question_id: null,
          discover_skiff_id: null,
        },
      },
      {
        Entry: {
          id: "153",
          created: "2021-11-08 03:31:43",
          modified: "2021-11-08 03:34:18",
          project_id: "18",
          user_id: "1",
          entry: "For Flash Card five #2",
          processed: true,
          action: false,
          discover_question_id: null,
          discover_skiff_id: null,
        },
      },
    ],
  };
  let currentCardIndex = 0;
  console.log(data);
  let flashCardArray = [];
  let frontOrBack = "front";

  for(card in data){
    let temporaryObject = {};
    temporaryObject[card] = data[card];
    flashCardArray.push(temporaryObject);
  }

  $('#next').click(()=>{
    if(currentCardIndex == flashCardArray.length - 1){
      currentCardIndex = 0;
      setFrontAndBack(flashCardArray[currentCardIndex]);
    }
    else{
      currentCardIndex++;
      setFrontAndBack(flashCardArray[currentCardIndex]);
    }
  });


  $('#previous').click(()=>{
    if(currentCardIndex == 0){
      currentCardIndex = flashCardArray.length - 1;
      setFrontAndBack(flashCardArray[currentCardIndex]);
    }
    else{
      currentCardIndex--;
      setFrontAndBack(flashCardArray[currentCardIndex]);
    }
  });
  $('#front').css({
    'background-color' : '#1550a4',
  });

  $('#back').click(()=>{
    $('.card').addClass('flipped');
    $('#front').css({
      'background-color' : '#4eabdb',
    });
    $('#back').css({
      'background-color' : '#1550a4',
    });

  });

  $('#front').click(()=>{
    $('.card').removeClass('flipped');
    $('#back').css({
      'background-color' : '#4eabdb',
    });
    $('#front').css({
      'background-color' : '#1550a4',
    });
  })

  setFrontAndBack(flashCardArray[currentCardIndex]);
  function setFrontAndBack (element){
    $('.front-face').html(`
    <h2>${element ? Object.keys(element)[0] : '<h2>Flashcard Title</h2>'}</h2>
    <fieldset>
      <input id="flashcards-revise-select-front" type="checkbox" ${element['show'] ? 'checked' : ''}>
      <label for="flashcards-revise-select-front">Add To Revise List</label>
    </fieldset>`);
    $('.back-face').html(`
    <ul class="bullet-list">
      ${element ? (()=>{
        let string = "";
        element[Object.keys(element)[0]].forEach(element => {
          string += `<li>${element['Entry']['entry']}</li>`;
        });
        return string;
      })() : `<li>Lorem ipsum dolor sit amet</li>
      <li>Sit amet bibendum tellus est nec nis</li>
      <li>Fonsie dacilisis</li>
      <li>Quisque ipsum dolor sit amet</li>`}
    </ul>
    <fieldset>
        <input id="flashcards-revise-select-back" type="checkbox"${element['show'] ? 'checked' : ''}>
        <label for="flashcards-revise-select-back">Add To Revise List</label>
    </fieldset>`);
    $('#flashcards-revise-select-front').change(function() {
      // this will contain a reference to the checkbox   
      if (this.checked) {
        flashCardArray[currentCardIndex]['show'] = true;
        console.log(flashCardArray);
        $('#flashcards-revise-select-back').prop("checked", true);
      } else {
        flashCardArray[currentCardIndex]['show'] = false;
        $('#flashcards-revise-select-back').prop("checked", false);
      }
    });
    $('#flashcards-revise-select-back').change(function() {
      // this will contain a reference to the checkbox   
      if (this.checked) {
        flashCardArray[currentCardIndex]['show'] = true;
        console.log(flashCardArray);
        $('#flashcards-revise-select-front').prop("checked", true);
      } else {
        flashCardArray[currentCardIndex]['show'] = false;
        $('#flashcards-revise-select-front').prop("checked", false);
      }
    });
  }

  $('#flashcards-revise').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
      flashCardArray = flashCardArray.filter(el => el['show']);
      setFrontAndBack(flashCardArray[0]);
      currentCardIndex = 0;
    } 
  });

  $('#flashcards-revise').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
      flashCardArray = flashCardArray.filter(el => el['show']);
      setFrontAndBack(flashCardArray[0]);
      currentCardIndex = 0;
    } 
  });

  $('#flashcards-all').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
      let flashCardArray = [];
      for(card in data){
        let temporaryObject = {};
        temporaryObject[card] = data[card];
        flashCardArray.push(temporaryObject);
      }
      setFrontAndBack(flashCardArray[0]);
      currentCardIndex = 0;
    } 
  });

  $('#flashcards-starred').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
      let flashCardArray = [];
      for(card in data){
        let temporaryObject = {};
        temporaryObject[card] = data[card];
        flashCardArray.push(temporaryObject);
      }
      setFrontAndBack(flashCardArray[0]);
      currentCardIndex = 0;
    } 
  });
  
  $("#shuffle").click(function () {
    flashCardArray = shuffle(flashCardArray);
    currentCardIndex = 0;
    setFrontAndBack(flashCardArray[currentCardIndex]);
  })
});




function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// HEIGHT-BASED OPEN/CLOSE -----------------------
// open
function heightopen() {
  $(this).height($(this).get(0).scrollHeight).addClass("open"); // get height and open
  $(this).one("transitionend", function () {
    // after transition complete
    $(this).height(""); // revert to CSS-set height
  });
}

// close
function heightclose() {
  $(this).height($(this).get(0).scrollHeight).height("").removeClass("open");
}

// open & close based on open state
function heightopenclose() {
  if ($(this).hasClass("open")) {
    // close
    $(this).each(heightclose);
  } else {
    // open
    $(this).each(heightopen);
  }
}

// SIDEBAR HIDE ---------------------
$(".sidebar > button").click(function () {
  $(".sidebar").toggleClass("hidden");
});

// SCRATCHPAD EXPAND/COLLAPSE ---------------------
$(".scratchpad-toggle").click(function () {
  $("#scratchpad, .scratchpad-toggle").toggleClass("expanded");
});

// FLASHCARDS --------------------

// select front/back -------
$("#flashcards-front").on("change click", function () {
  if (this.checked) {
    $(".flashcards .card").removeClass("flipped");
  }
});
$("#flashcards-back").on("change click", function () {
  if (this.checked) {
    $(".flashcards .card").addClass("flipped");
  }
});

// main flip button --------
$(".flashcards .pagination button").click(function () {
  $(".flashcards .card").toggleClass("flipped");
});

// bind front/back checkboxes ---------
$("#flashcards-revise-select-front").on("change", function () {
  if (this.checked) {
    $("#flashcards-revise-select-back").prop("checked", true);
  } else {
    $("#flashcards-revise-select-back").prop("checked", false);
  }
});
$("#flashcards-revise-select-back").on("change", function () {
  if (this.checked) {
    $("#flashcards-revise-select-front").prop("checked", true);
  } else {
    $("#flashcards-revise-select-front").prop("checked", false);
  }
});

// PROPORTIONS SELECTORS --------------------------------------

// pie or bubble
$('input:radio[name="proportions-seletor-2"]').change(function () {
  $('.proportions div[data-t-name="PieChart"]').toggle();
  $('.proportions div[data-t-name="PackedBubbleChart"]').toggle();
});

// static or dynamic
$('input:radio[name="proportions-seletor-1"]').change(function () {
  $('.proportions div[data-t-name="ProportionSliders"]').toggle();
  $('.proportions div[data-t-name="SaveButton"]').toggle();
});

// FOLDER EXPANDERS ----------------
$(".project-listing li > div button").click(function () {
  if ($(this).closest("li").find("> ul:not(:first-of-type)").hasClass("open")) {
    // close
    $(".project-listing ul li > ul:not(:first-of-type)").each(heightclose);
  } else {
    // open
    // close other folders
    $(".project-listing > li > ul:not(:first-of-type)").each(heightclose);
    $(".project-listing ul li > ul:not(:first-of-type)").each(heightclose);
    $(this).closest("ul").addClass("open");
  }
  $(this).closest("li").find("> ul:not(:first-of-type)").each(heightopenclose);
});

// OVERLAY ----------------------------------------
// vertical centering & fade in ---
function verticalPosition() {
  var viewportHeight = $(window).height();
  var overlayHeight = $(this).height();
  var scrollLocation = $(window).scrollTop();

  // vertically centered when room
  if (viewportHeight > overlayHeight + 60) {
    var viewportCenter = Math.max(
      $(window).height() / 2 - $(this)[0].offsetHeight / 2,
      0
    );
    $(this)
      .css({ top: scrollLocation + viewportCenter })
      .addClass("open");
  }

  // top of viewport when too tall
  else {
    $(this)
      .css({ top: scrollLocation + 20 })
      .addClass("open");
  }
}

// click event -----------------------------
$(".overlay").on("click", function (a) {
  // clear overlay
  $("#overlay").detach();

  // get link href
  var overlayHref = $(this).attr("href");

  // add overlay and href content to page
  $("body").append(
    $('<div id="overlay"></div>').load(overlayHref, function () {
      // add close button
      $("#overlay").prepend('<button type="button">Close</button>');

      // wait for <img>s to load
      if ($("#overlay img").length) {
        var $images = $("#overlay img");
        var loaded_images_count = 0;

        $images.on("load", function () {
          loaded_images_count++;
          if (loaded_images_count == $images.length) {
            // all images load
            $("#overlay").each(verticalPosition);
          } else {
            // not all images load
            $("#overlay").each(verticalPosition);
          }
        });
      } else {
        // no images
        $("#overlay").each(verticalPosition);
      }

      // focus on first element in overlay on initial open
      $("#overlay button:first-child").focus();

      // focus trapping ***not working yet***
      /*$('#overlay').on('transitionend', function(){ // after dummy transition complete
        $('#overlay button:first-child').focus(); // focus on first element in overlay
    });*/

      // close button
      $("#overlay button:first-child").on("click", function () {
        $("#overlay")
          .removeClass("open")
          .one("transitionend", function () {
            $(this).detach();
          });
        // restore focus to clicked element
        $(a.target).focus();
      });

      // close on outside click
      $(document).on("click", function (event) {
        if (!$(event.target).closest("#overlay").length) {
          $("#overlay button:first-child").trigger("click");
        }
      });

      // close on Esc key
      $(document).keyup(function (b) {
        if (b.keyCode == 27) {
          $("#overlay button:first-child").trigger("click");
          b.preventDefault();
        }
      });
    })
  );

  // prevent normal link action
  a.preventDefault();
});

// STICKY NOTES ---------------------------------------------
var defaultcolor = "";

// stuff to rerun after a note is added
function stickynotes() {
  // active/focus note
  $(".sticky-board li").on("click", function () {
    $(".sticky-board li").removeClass("active");
    $(this).addClass("active");
    $(this).find("div").focus();
  });

  // dragging (for INPUT)
  $(".sticky-board:not(.output) li").draggable({
    scroll: true,
    stack: ".sticky-board li",
    cancel: ".sticky-board li button",
    start: function () {
      $(".sticky-board li").removeClass("active");
      $(this).addClass("active");
      $(this).find("div").focus();
    },
  });

  // sorting (for CATEGORIZE/OUTPUT)
  $(".sticky-board.output ul").sortable({
    items: "li",
    cancel: ".category",
    connectWith: ".sticky-board ul",
    cancel: ".sticky-board li button, .sticky-board .category",
    revert: 50,
    update: function () {
      // add new column as needed
      if (!$(".sticky-board ul").is(":empty")) {
        $(".sticky-board").append("<ul></ul>");
      }

      // remove inline style (absolute position)
      $(".sticky-board li.active").removeAttr("style");

      // rerun sorting to pick up new empty <ul>
      $(".sticky-board.output ul").sortable({
        items: "li",
        cancel: ".category",
        connectWith: ".sticky-board ul",
        cancel: ".sticky-board li button, .sticky-board .category",
        revert: 50,
      });

      // keep categories at top
      $(".sticky-board .category").each(function () {
        if (!$(this).is(":first-child")) {
          $(this).prependTo($(this).parent());
        }
      });
    },
  });

  // column sorting
  $(".sticky-board.output").sortable({ handle: ".category" });

  // remove a note
  $(".sticky-board button").on("click", function () {
    if ($(this).closest("li").hasClass("category")) {
      // if category remove column
      $(this).closest("ul").empty();
    } else {
      // regular note
      $(this).closest("li").remove();
    }
  });
} // end of "stickynotes" function

// run on load
stickynotes();

// default color button - de-activate all notes
$('.sticky-nav ul:last-of-type button[title="Set Default Color"]').on(
  "click",
  function () {
    $(".sticky-board li").removeClass("active");
  }
);

// set colors (on active item or default when none active)
$('.sticky-nav ul:last-of-type button[title="Yellow"]').on(
  "click",
  function () {
    $(".sticky-board li.active")
      .removeClass("yellow red green blue")
      .addClass("active yellow");

    // set default color
    if (!$(".sticky-board li").hasClass("active")) {
      defaultcolor = "yellow";
      $('.sticky-nav ul:last-of-type button[title="Set Default Color"]')
        .removeClass("yellow red green blue")
        .addClass("yellow");
    }
  }
);

$('.sticky-nav ul:last-of-type button[title="Red"]').on("click", function () {
  $(".sticky-board li.active")
    .removeClass("yellow red green blue")
    .addClass("active red");

  // set default color
  if (!$(".sticky-board li").hasClass("active")) {
    defaultcolor = "red";
    $('.sticky-nav ul:last-of-type button[title="Set Default Color"]')
      .removeClass("yellow red green blue")
      .addClass("red");
  }
});

$('.sticky-nav ul:last-of-type button[title="Green"]').on("click", function () {
  $(".sticky-board li.active")
    .removeClass("yellow red green blue")
    .addClass("active green");

  // set default color
  if (!$(".sticky-board li").hasClass("active")) {
    defaultcolor = "green";
    $('.sticky-nav ul:last-of-type button[title="Set Default Color"]')
      .removeClass("yellow red green blue")
      .addClass("green");
  }
});

$('.sticky-nav ul:last-of-type button[title="Blue"]').on("click", function () {
  $(".sticky-board li.active")
    .removeClass("yellow red green blue")
    .addClass("active blue");

  // set default color
  if (!$(".sticky-board li").hasClass("active")) {
    defaultcolor = "blue";
    $('.sticky-nav ul:last-of-type button[title="Set Default Color"]')
      .removeClass("yellow red green blue")
      .addClass("blue");
  }
});

// add a note -------------------------
$(
  '.sticky-nav button[title="Add Note"], .sticky-nav button[title="Add Category"]'
).on("click", function () {
  // deactivate all notes
  $(".sticky-board li").removeClass("active");

  // calculate centering with variability
  var min = -30;
  var max = 30;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;

  var boardwidth = $(".sticky-board").width() / 2 - 140 + random;
  var boardheight = 150 - random;

  // add new note
  $(".sticky-board ul:first-of-type").append(
    '<li class="active ' +
      defaultcolor +
      '" style="position:absolute;top:' +
      boardheight +
      "px;left:" +
      boardwidth +
      'px"><button type="button" title="Remove">Remove</button><div contenteditable></div></li>'
  );
  $(".sticky-board ul:first-of-type li:last-child div").focus();

  // if category
  if ($(this).attr("title") == "Add Category") {
    $(".sticky-board ul:first-of-type li:last-child")
      .removeAttr("style")
      .prependTo(".sticky-board ul:empty:first")
      .addClass("category");
    if (!$(".sticky-board ul").is(":empty")) {
      $(".sticky-board").append("<ul></ul>");
    }
  }

  // rerun stickynotes
  stickynotes();
});

// SEQUENCE --------------------------------------
// groups (& pairs)
$(".common-grid.sequence").sortable({ handle: "> div, dl", revert: 50 });
$(".common-grid.sequence").sortable({ cancel: ".pairs > li:first-child" });

// categories
$(".common-grid.sequence > li > ul:not(:first-of-type)").sortable({
  handle: "> div",
  connectWith: ".common-grid.sequence > li > ul:not(:first-of-type)",
  revert: 50,
});
