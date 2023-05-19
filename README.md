[![Actions Status](https://github.com/FavourDaniel/SCA-Project/actions/workflows/workflow.yml/badge.svg)](https://github.com/FavourDaniel/SCA-Project/actions)


# SCA-Project
This is my project submission for the SCA Cloud School Bootcamp Cohort 4 program.

## Project Overview
This project is focused on the containerization and deployment of a container to Azure Cloud Platform.

It is built with the following tools and services:
- Docker (Containerizes the Docker Image)
- Azure Container Registry (Hosts the container image)
- Azure Kubernetes Service (Provides a fully orchestrated kubernetes cluster for the container to run in)
- Azure Monitor (Comprehensive monitoring solution for collecting, analyzing, and responding to telemetry from the cloud)
- Container Insight (Monitors the performance of container workloads)
- Log Analytics (Provides a centralized storage and management location for log data collected by Azure Monitor and AKS cluster)
- GitHub Actions (Sets up a CI pipeline to test and integrate code)
- Terraform (builds all the necessary infrastructure )

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

## Push to ACR
- Get the server name for your conatiner instance
```
az acr list --resource-group $resourceGroup --query "[].{acrLoginServer:loginServer}" --output table
```

- Tag the image
```
docker tag scaproject <loginserver>/<imagename>
```

- Grant Authorization so Docker can push to ACR
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