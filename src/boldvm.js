  window._bcvma = window._bcvma || [];
  _bcvma.push(["setAccountID", "2501161210728732147"]);
  _bcvma.push(["setParameter", "WebsiteID", "2690098266142947472"]);
  _bcvma.push(["setParameter", "InvitationID", "3717724025386040644"]);
  _bcvma.push(["setParameter", "VisitName", ""]);
  _bcvma.push(["setParameter", "VisitPhone", ""]);
  _bcvma.push(["setParameter", "VisitEmail", ""]);
  _bcvma.push(["setParameter", "VisitRef", ""]);
  _bcvma.push(["setParameter", "VisitInfo", ""]);
  _bcvma.push(["setParameter", "CustomUrl", ""]);
  _bcvma.push(["setParameter", "WindowParameters", ""]);
  _bcvma.push(["addFloat", {type: "chat", id: "740492575420494104"}]);
  _bcvma.push(["pageViewed"]);
  var bcLoad = function(){
    if(window.bcLoaded) return; window.bcLoaded = true;
    var vms = document.createElement("script"); vms.type = "text/javascript"; vms.async = true;
    vms.src = ('https:'==document.location.protocol?'https://':'http://') + "vmss.boldchat.com/aid/2501161210728732147/bc.vms4/vms.js";
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vms, s);
  };
  if(window.pageViewer && pageViewer.load) pageViewer.load();
  else if(document.readyState=="complete") bcLoad();
  else if(window.addEventListener) window.addEventListener('load', bcLoad, false);
  else window.attachEvent('onload', bcLoad);



//bcLoad();
