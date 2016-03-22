Template.Result.onRendered(function() {
  var ieCtx = $("#ieChart").get(0).getContext("2d");
  var nsCtx = $("#nsChart").get(0).getContext("2d");
  var tfCtx = $("#tfChart").get(0).getContext("2d");
  var jpCtx = $("#jpChart").get(0).getContext("2d");
  var ieData = [
    {
      value: Session.get("iNum"),
      color:"#F7464A",
      label: "Introversion"
    },
    {
      value: 7 - Session.get("iNum"),
      color: "#46BFBD",
      label: "Extroversion"
    }
  ];
  var nsData = [
    {
      value: Session.get("nNum"),
      color:"#F7464A",
      label: "Intuition"
    },
    {
      value: 7 - Session.get("nNum"),
      color: "#46BFBD",
      label: "Sensing"
    }
  ];
  var tfData = [
    {
      value: Session.get("tNum"),
      color:"#F7464A",
      label: "Thinking"
    },
    {
      value: 7 - Session.get("tNum"),
      color: "#46BFBD",
      label: "Feeling"
    }
  ];
  var jpData = [
    {
      value: Session.get("jNum"),
      color:"#F7464A",
      label: "Judging"
    },
    {
      value: 7 - Session.get("jNum"),
      color: "#46BFBD",
      label: "Perceiving"
    }
  ]
  var ieChart = new Chart(ieCtx).Pie(ieData);
  var nsChart = new Chart(nsCtx).Pie(nsData);
  var tfChart = new Chart(tfCtx).Pie(tfData);
  var jpChart = new Chart(jpCtx).Pie(jpData);
});

Template.Result.helpers({
  "IE": function() {
    if(Session.get("iNum") > 3) {
      return "I";
    } else {
      return "E";
    }
  },
  "NS": function() {
    if(Session.get("nNum") > 3) {
      return "N";
    } else {
      return "S";
    }
  },
  "TF": function() {
    if(Session.get("tNum") > 3) {
      return "T";
    } else {
      return "F";
    }
  },
  "JP": function() {
    if(Session.get("jNum") > 3) {
      return "J";
    } else {
      return "P";
    }
  }
});

Template.Result.events({
  "click .retake-btn": function() {
    Session.set("questions", "IEQuestions");
  }
});
