import { google, drive_v3 } from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';

const drive = google.drive('v3');

async function getDocs(query?: string): Promise<drive_v3.Schema$FileList> {
  const auth = await authenticate({
    // keyfilePath: '../oauth2.keys.json',
    "client_id": "602241902500-8vmlnsdr30uu4poikvpk8ue3kv8tnv54.apps.googleusercontent.com",
    "project_id": "picture-frame-407807",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": "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",
    "javascript_origins": [
      "http://localhost:3000",
      "http://localhost:3001"
    ],
    scopes: 'https://www.googleapis.com/auth/drive.metadata.readonly',
  });
  google.options({auth});

  const params: drive_v3.Params$Resource$Files$List = {pageSize: 3};
  params.q = query;
  const res = await drive.files.list(params);
  console.log(res.data);
  return res.data;
}

export default getDocs;