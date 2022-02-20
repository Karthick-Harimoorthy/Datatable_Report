var tour = {
    id: 'hello-hopscotch6',
    steps: [                          
        {
            target: "groups-tab",
            placement: "bottom",
            title: "Groups",
            content: "Contains all the groups with it's assigned department.",
            width: 370,
            xOffset: 50,
        },
        {
            target: "users-tab",
            placement: "bottom",
            title: "Users",
            content: "Contains all the users with it's assigned department and group.",
            width: 410,
            xOffset: 50,
        },
        {
            target: "date",
            placement: "top",
            title: "Day Selection",
            content: "Lists the past and present days of the pay period.",
            xOffset: -35,
            arrowOffset: 100,
            yOffset: 20,
        },
        {
            target: "planned_start_time",
            placement: "bottom",
            title: "Planned Start Time",
            content: "Displays the planned start time for the selected day and group or user.",
        },
        {
            target: "changed_time_start",
            placement: "bottom",
            title: "Change Planned Shift Start",
            content: "Used to change the planned shift start.",
        },
        {
            target: "planned_end_time",
            placement: "bottom",
            title: "Planned End Time",
            content: "Displays the planned end time for the selected day and group or user.",
        },        
        {
            target: "changed_time_end",
            placement: "bottom",
            title: "Change Planned Shift End",
            content: "Used to change the planned shift end.",
            xOffset: -110,
            arrowOffset: 110,
        },
        {
            target: "change_event",
            placement: "top",
            title: "Change Event",
            content: "Display list of previously created events.",
        },       
        {
            target: "change_event",
            placement: "top",
            title: "Select Change Event",
            content: "When an event is selected Change Name, Reason Type, Start Date, Part #/SO/Short Desc, Extended Description and File display the values of the selected change event in a disabled control state.",
            width: 350,
        },
        {
            target: "addnew_event",
            placement: "left",
            title: "Add New Event",
            content: "Used to add a new event.",
            yOffset: -50,
            arrowOffset: 50,
        },
        {
            target: "change_event_name",
            placement: "top",
            title: "Change Event Name",
            content: "Displays the event name and can be used to change event name.",
        },
        {
            target: "reason_type",
            placement: "top",
            title: "Reason Type",
            content: "Displays the reason type and can be used to change the reason type.",
        },
        {
            target: "plan_start_date_str",
            placement: "top",
            title: "Planned Start Date",
            content: "Displays start date and can be used to change the start date.",
            xOffset: -50,
            arrowOffset: 50,
        },
        {
            target: "part_id",
            placement: "top",
            title: "Part #/SO/Short Desc",
            content: "Displays Part #/SO Number/Short desc.",
            width: 300,
        },
        {
            target: "description_text",
            placement: "top",
            title: "Description",
            content: "Provides a detail description of the event.",
            width: 280,
        },
        {
            target: "exampleFormControlFile1",
            placement: "top",
            title: "Choose File",
            content: "Used to choose the file.",
        },       
        {
            target: "file_label",
            placement: "bottom",
            title: "File Name",
            content: "Displays the file name if selected.",
            xOffset: -190,
        },
        {
            target: "submit_button",
            placement: "right",
            title: "Save Changes",
            content: "Updates the entries / creates a new record.",
            width: 300,
            yOffset: -48,
            arrowOffset: 50,
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
  var startBtnId = 'startTourBtn6',
      calloutId = 'startTourCallout6',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch6:') === 0) {
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

