// import { useEffect } from 'react';
import { useState, Dispatch, SetStateAction } from 'react';
import useDrivePicker from 'react-google-drive-picker'
import { PickerCallback } from 'react-google-drive-picker/dist/typeDefs';

interface GooglePickerProps {
  onSelect: Dispatch<string>;
}

function GooglePicker( { onSelect }: GooglePickerProps ) {
  const [target, setTarget] = useState('');
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
      viewId: "FOLDERS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: false,
      showUploadFolders: false,
      supportDrives: true,
      multiselect: true,
      setIncludeFolders: true,
      setSelectFolderEnabled: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data: PickerCallback) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data);
        if (data.action === 'picked') {
          console.log(`User selected ${data.docs.length} folders`);
          if (data.docs.length > 0) {
            console.log('User selected file:', data.docs[0]);
            let target = 'https://drive.google.com/uc?export=view&id=' + data.docs[0].id;
            setTarget(target);
            onSelect(target);
            console.log('target url: ' + target);
          }
        }
      },
    })
  }


  return (
    <div>
      {
        target ? 
        <div>
          <img src={target} alt="target" />
          {target}
        </div> : 
        <button onClick={() => handleOpenPicker()}>Open Picker</button>
      }
    </div>
  );
}

export default GooglePicker;