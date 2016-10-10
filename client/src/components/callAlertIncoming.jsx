import React from 'react';

const IncomingCallAlert = ({username, acceptOnclick, rejectOnclick}) => {
  console.log("###@@@@@@ create incoming call alerts");
  return (
    <div className="call-alerts-incoming">
      <div className="call-incoming-notifications">
        <img id="seeOptionsIcon" className="call-icon icon-flash" src="public/images/callwaiting.svg"></img>
        <span className="call-message"> {"Incoming call from " + username + "..."}</span>
      </div>
      <div className="call-incoming-options">
        <div id="acceptIcon">
          <img className="call-mini-icon" src="public/images/call.png" onClick={acceptOnclick}></img>
          Accept
        </div>
        <div id="rejectIcon">
          <img className="call-mini-icon" src="public/images/rejectcall.png" onClick={rejectOnclick}></img>
          Reject
        </div>
      </div>
    </div>
  )
};

export default IncomingCallAlert;

//   $('#acceptIcon').unbind().on('click', function(){
//     context.pcs[pcKey].createAnswer(successCallback, errorCallback);
//   });
//   $('#rejectIcon').unbind().on('click', function(){
//     signalingChannel.emit('disconnect call', JSON.stringify({"pcKey": pcKey}));
//   });

//     <div className="call-alerts-incoming">
//       <div className="call-incoming-notifications">
//         <img id="seeOptionsIcon" className="call-icon" src="public/images/callwaiting.svg"></img>
//         <span className="call-message"> Incoming call... </span>
//       </div>
//       <div className="call-incoming-options">
//         <div id="acceptIcon">
//           <img className="call-mini-icon" src="public/images/call.png"></img>
//           Accept
//         </div>
//         <div id="rejectIcon">
//           <img className="call-mini-icon" src="public/images/rejectcall.png"></img>
//           Reject
//         </div>
//       </div>
//     </div>