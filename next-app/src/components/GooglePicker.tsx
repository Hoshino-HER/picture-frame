import { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'


function GooglePicker() {
  const [openPicker, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId: "602241902500-8vmlnsdr30uu4poikvpk8ue3kv8tnv54.apps.googleusercontent.com",
      // clientId = OAuth 2.0 client ID "ImageShow"
      //   {"web":{
      //     "client_id":"602241902500-8vmlnsdr30uu4poikvpk8ue3kv8tnv54.apps.googleusercontent.com",
      //     "project_id":"picture-frame-407807",
      //     "auth_uri":"https://accounts.google.com/o/oauth2/auth",
      //     "token_uri":"https://oauth2.googleapis.com/token",
      //     "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
      //     "client_secret":"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",
      //     "javascript_origins":["http://localhost:3000",
      //     "http://localhost:3001"]}
      //   }
      developerKey: "AIzaSyDcSkMPcuDYwYjIyyzieYq27tFwL46PHKY",
      // developerKey = API キー "API キー 1"
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
  }


  return (
    <div>
      <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default GooglePicker;