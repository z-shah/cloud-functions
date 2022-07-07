### Access secrets from secret manager in cloud functions

#### Create a secret
```
gcloud secrets create "my_token" \
    --replication-policy "automatic" \
    --data-file - <<< "abcd1234"
```

#### deploy cloud function
```
gcloud functions deploy "secretDemo" \
    --runtime "nodejs14" \
    --trigger-http \
    --allow-unauthenticated \
    --set-secrets "TOKEN=my_token:latest" --region=australia-southeast1
```

#### Ensure cloud function service account has permissions to access the secrets. 

`Ensure Cloud function SA has 'roles/secretmanager.secretAccessor' to the runtime service account on the project or secrets.`

**NOTE:** This is for demo purpose only. This sample cloud functions returns the secret value in console.log and returns it.



