# SCA-Project

## Setup the Application on your Local
```
npm install express
node server.js
```

## Build the Docker Image
- To build the container image
```
docker build -t <tag-the-image> .
```

- Run the Container
```
docker run -d -p 3000:80 scaproject

```
docker run -d -p 3000:80 <image-name>
```

## Push to ACR
- Get the server name for your conatiner instance
```
az acr list --resource-group $resourceGroup --query "[].{acrLoginServer:loginServer}" --output table
```

- Tag the image
```
docker tag scaproject <loginserver>/<imagename>
```

- Grant Authorization so docker can push to acr
```
az acr login --name $acr
```

- Push the Image
```
docker push <loginserver>/<imagename>
```

## Terraform Commands
```
cd terraform-infrastructure
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```