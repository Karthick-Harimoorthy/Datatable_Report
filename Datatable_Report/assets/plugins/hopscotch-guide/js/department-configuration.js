var tour = {
    id: 'hello-hopscotch2',
    steps: [                          
        {
            target: "department_list",
            placement: "top",
            title: "Department List",
            content: "Lists all the departments available.",           
        },
        {
            target: "groups_list",
            placement: "top",
            title: "Group List",
            content: "Lists all the group(s) for the selected department if assigned.",
        },
        {
            target: "addnew_group",
            placement: "top",
            title: "Add New Group",
            content: "Adds a new group for the selected department.",
            width: 320,
            arrowOffset: 50,
        },
        {
            target: "confirm_delete_modal",
            placement: "top",
            title: "Delete Group",
            content: "Deletes the selected group for the selected department.",
            width: 370,
            xOffset: -220,
            arrowOffset: 280,
        },
        {
            target: "dept_user",
            placement: "top",
            title: "User Available List",
            content: "Lists all the available user(s) for the selected department and except selected group.",
            width: 300,
           
        },
        {
            target: "grp_user",
            placement: "top",
            title: "User Assigned List",
            content: "Lists all the assigned user(s) for the selected department and group.",
            xOffset: -50,
            arrowOffset: 100,
        },
        {
            target: "Add_user",
            placement: "top",
            title: "Add User",
            content: "Displays the selected available user as assigned user for the selected department and group if available.",
            width: 350,
        },
        {
            target: "saveuser_list",
            placement: "right",
            title: "Save Changes",
            content: "Saves the changes made in the user assignment list for the selected department and group.",
            width: 330,
            yOffset: -45,
            arrowOffset: 45,
        },
        {
            target: "currentprofile",
            placement: "top",
            title: "Current Profile",
            content: "Displays the currently assigned profile for the selected group.",            
            yOffset: -30,
            arrowOffset: 50,
        },
        {
            target: "currenteffective_date",
            placement: "top",
            title: "Current Effective Date",
            content: "Displays effective date of the currently assigned profile.",          
            yOffset: -30,
            arrowOffset: 50,
        },        
        {
            target: "group_shift_profiles",
            placement: "top",
            title: "Assigned Shift Profiles",
            content: "Displays all assigned shift profiles with their effective dates.",
            yOffset: -30,
            arrowOffset: 50,
        },
        {
            target: "futureprofile_ddl",
            placement: "top",
            title: "Future Profile",
            content: "Contains a list of profiles and not the profile value in the Current Profile field.",           
            yOffset: -30,
            arrowOffset: 50,
        },
        {
            target: "futureeffective_date",
            placement: "top",
            title: "Effective Date",
            content: "It is the date from when the future profile be effective.",
            width: 350,
            xOffset: -180,
            yOffset: -30,
            arrowOffset: 200,
        },
        {
            target: "save_grp_profile_btn",
            placement: "right",
            title: "Save Changes",
            content: "Saves the changes made in the profile assignment for the selected department and group.",
            width: 340,
            yOffset: -45,
            arrowOffset: 45,
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
  var startBtnId = 'startTourBtn2',
      calloutId = 'startTourCallout2',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch2:') === 0) {
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

