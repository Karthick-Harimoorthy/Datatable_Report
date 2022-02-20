var tour = {
    id: 'hello-hopscotch5',
    steps: [                          
        {
            target: "profiles_list",
            placement: "top",
            title: "Shift Profiles List",
            content: "Displays all the shift profiles.",           
        },
        {
            target: "add_new_profile",
            placement: "top",
            title: "Add New Profile",
            content: "Used to add a new profile.",
        },
        {
            target: "confirm_delete_modal",
            placement: "top",
            title: "Delete Profile",
            content: "Used to delete the selected profile.",
        },
        {
            target: "shift_revision_list",
            placement: "top",
            title: "Shift Profile Revisions",
            content: "Displays the effective dates for the selected profile.",
        },     
        {
            target: "add_new_revision",
            placement: "top",
            title: "Add New Revision",
            content: "Used to add a new revision for the selected profile.",
        },         
        {
            target: "profile_name",
            placement: "top",
            title: "Profile Name",
            content: "Displays the profile name of the selected profile.",
            width: 320,
        },
        {
            target: "effective_text",
            placement: "top",
            title: "Effective Date",
            content: "Disaplys the effective date of the seletced profile. It is disabled for an existing profile and enabled for new profile.",
            width: 380,
        },        
        {
            target: "std_shift_hours",
            placement: "top",
            title: "Standard Work Hour Length",
            content: "Specifies the standard number of hours in a day that constitutes none overtime for a shift profile.",
            width: 320,
            xOffset: -100,
            arrowOffset: 100,
        },
        {
            target: "sunday_start_time",
            placement: "bottom",
            title: "Start Time",
            content: "Shows the start time for sunday set by a modal control with 30 minutes increment.",
        },
        {
            target: "sunday_end_time",
            placement: "bottom",
            title: "End Time",
            content: "Shows the end time for sunday set by a modal control with 30 minutes increment.",
        },
        {
            target: "save_changes",
            placement: "top",
            title: "Save Changes",
            content: "Updates the changes made for shift profile settings/ Add profile.",
            width: 410,
            arrowOffset: 35,
        },        
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
  var startBtnId = 'startTourBtn5',
      calloutId = 'startTourCallout5',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch5:') === 0) {
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

