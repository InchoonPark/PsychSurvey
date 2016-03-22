Template.TeFeQuestions.events({
  "submit #tefe-form": function(event) {
    event.preventDefault();
    var q1a = $('input[name="q1"]:checked').val();
    var q2a = $('input[name="q2"]:checked').val();
    var q3a = $('input[name="q3"]:checked').val();
    var q4a = $('input[name="q4"]:checked').val();
    var q5a = $('input[name="q5"]:checked').val();
    var q6a = $('input[name="q6"]:checked').val();
    var q7a = $('input[name="q7"]:checked').val();
    if(q1a && q2a && q3a && q4a && q5a && q6a && q7a) {
      var teNum = 0;
      if(q1a === 'a') {
        teNum++;
      }
      if(q2a === 'a') {
        teNum++;
      }
      if(q3a === 'b' || q3a === 'c') {
        teNum++;
      }
      if(q4a === 'b') {
        teNum++;
      }
      if(q5a === 'a') {
        teNum++;
      }
      if(q6a === 'a') {
        teNum++;
      }
      if(q7a === 'a') {
        teNum++;
      }
      Session.set("tNum", teNum);
      if(Session.get("iNum") > 3) {
        Session.set("questions", "Result");
      } else {
        Session.set("questions", "NiSiQuestions");
      }
      window.location = '#';
    } else {
      toastr.error("One of the following fields is missing. Please try again!");
    }
  }
});
