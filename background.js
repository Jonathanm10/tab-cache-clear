chrome.action.onClicked.addListener((tab) => {
    var url = new URL(tab.url);
    var domain = url.hostname;

    // Clear cookies
    chrome.cookies.getAll({domain: domain}, function(cookies) {
      for(let i=0; i<cookies.length;i++) {
          chrome.cookies.remove({url: "http" + (cookies[i].secure ? "s" : "") + "://" + cookies[i].domain + cookies[i].path, name: cookies[i].name});
      }
    });
  });
