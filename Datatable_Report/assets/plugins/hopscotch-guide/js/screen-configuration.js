var tour = {
    id: 'hello-hopscotch7',
    steps: [                          
        {
            target: "building_list",
            placement: "top",
            title: "Screens List",
            content: "Contains all the different available screens.",  
            width: 300,
        },
        {
            target: "add_new_screen",
            placement: "bottom",
            title: "Add New Screen",
            content: "Used to add a new screen.",
        },
        {
            target: "confirm_delete_modal",
            placement: "bottom",
            title: "Delete Screen",
            content: "Used to delete the selected screen.",
        },
        {
            target: "screen_name",
            placement: "bottom",
            title: "Screen Name",
            content: "Displays the screen name.",
            xOffset: 20,
        },
        {
            target: "screen_title",
            placement: "bottom",
            title: "Screen Title",
            content: "Displays the screen title.",
        },
        {
            target: "dept_id",
            placement: "top",
            title: "Department(s)",
            content: "Displays list of department(s) with selected department(s) for selected screen.",
            width: 300,
        }       
    ],
    showPrevButton: true,
    scrollTopMargin: 100
},

/* ========== */
/* TOUR SETUP */
/* ========== */
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
},

init = function() {
  var startBtnId = 'startTourBtn7',
      calloutId = 'startTourCallout7',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch7:') === 0) {
    // Already started the tour at some point!
    hopscotch.startTour(tour);
  }
  else {
    // Looking at the page for the first(?) time.
    //setTimeout(function() {
    //  mgr.createCallout({
    //    id: calloutId,
    //    target: startBtnId,
    //    placement: 'right',
    //    title: 'Take a tour',
    //    content: 'Start by taking a tour!',
    //    yOffset: -25,
    //    arrowOffset: 20,
    //    width: 240
    //  });
    //}, 100);
  }

  addClickListener(document.getElementById(startBtnId), function() {
    if (!hopscotch.isActive) {
      mgr.removeAllCallouts();
      hopscotch.startTour(tour);
    }
  });
};

init();

