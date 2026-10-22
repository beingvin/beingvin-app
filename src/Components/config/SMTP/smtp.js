/* SmtpJS.com client helper */
export const Email = {
  send: function (a) {
    return new Promise(function (resolve, reject) {
      a.nocache = Math.floor(1e6 * Math.random() + 1);
      a.Action = "Send";
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (response) {
        resolve(response);
      });
    });
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    if (!a) return;
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    a.onload = function () {
      var res = a.responseText;
      if (t) t(res);
    };
    a.onerror = function () {
      console.warn("SMTP email notification was blocked by browser or ad blocker.");
    };
    try {
      a.send(n);
    } catch (err) {
      console.warn("SMTP request failed:", err);
    }
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest();
    if ("withCredentials" in t) {
      t.open(e, n, true);
    } else {
      t = null;
    }
    return t;
  },
};

export default Email;
