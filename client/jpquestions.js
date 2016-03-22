Template.JPQuestions.events({
  "submit": function() {
    event.preventDefault();
    var q1a = $('input[name="q1"]:checked').val();
    var q2a = $('input[name="q2"]:checked').val();
    var q3a = $('input[name="q3"]:checked').val();
    var q4a = $('input[name="q4"]:checked').val();
    var q5a = $('input[name="q5"]:checked').val();
    var q6a = $('input[name="q6"]:checked').val();
    var q7a = $('input[name="q7"]:checked').val();
    if(q1a && q2a && q3a && q4a && q5a && q6a && q7a) {
      var jNum = 0;
      if(q1a === 'a') {
        jNum++;
      }
      if(q2a === 'b') {
        jNum++;
      }
      if(q3a === 'b') {
        jNum++;
      }
      if(q4a === 'b') {
        jNum++;
      }
      if(q5a === 'b' || q5a === 'c') {
        jNum++;
      }
      if(q6a === 'a') {
        jNum++;
      }
      if(q7a === 'c' || q7a === 'd') {
        jNum++;
      }
      Session.set("jNum", jNum);
      if(jNum > 3) {
        if(Session.get("iNum") > 3) {
          Session.set("questions", "NiSiQuestions");
        } else {
          Session.set("questions", "TeFeQuestions");
        }
      } else {
        if(Session.get("iNum") > 3) {
          Session.set("questions", "TiFiQuestions");
        } else {
          Session.set("questions", "NeSeQuestions");
        }
      }
      window.location = '#';
    } else {
      toastr.error("One of the following fields is missing. Please try again!");
    }
  }
});
