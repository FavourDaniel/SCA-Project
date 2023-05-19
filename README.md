[![Actions Status](https://github.com/FavourDaniel/SCA-Project/actions/workflows/workflow.yml/badge.svg)](https://github.com/FavourDaniel/SCA-Project/actions)


# SCA-Project
This is my project submission for the SCA Cloud School Bootcamp Cohort 4 program.


## Project Overview
This project is focused on the containerization and deployment of a container to Azure Cloud Platform.

Tools Used
==========

| Tools & Services | Usage |
| ------- | ------- |
| Docker | Containerizes the Docker Image |
| Terraform | Automates the provisioning of Infrastructure on Azure |
| Azure Container Registry (ACR) | Hosts the container image in a repository |
| Azure Kubernetes Service (AKS) | Enables container execution in the Kubernetes cluster it provides |
| GitHub Actions | Provides workflows that automate the process of building, testing, and deploying code |
| Azure Monitor | Collects and analyzes telemetry data from Container Insights and Log Analytics |
| Container Insights | Monitors performance and health of containerized applications within AKS |
| Log Analytics | Provides a centralized storage and management location for log data collected by Azure Monitor and AKS cluster |


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