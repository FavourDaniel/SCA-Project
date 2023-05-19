[![Actions Status](https://github.com/FavourDaniel/SCA-Project/actions/workflows/workflow.yml/badge.svg)](https://github.com/FavourDaniel/SCA-Project/actions)


# SCA-Project
This is my project submission for the SCA Cloud School Bootcamp Cohort 4 program.

Tools Used
==========

| Tools & Services | Usage |
| ------- | ------- |
| Docker | Containerizes the Docker Image |
| Terraform | Automates the provisioning of Infrastructure on Azure |
| Firebase | Backend Service |


## Project Overview
This project is focused on the containerization and deployment of a container to Azure Cloud Platform.

It is built with the following tools and services:
<table>
  <tr>
    <th>Tools & Services</th>
    <th>Application</th>
  </tr>
  <tr>
    <td>Docker</td>
    <td>Containerizes the Docker Image</td>
  </tr>
  <tr>
    <td>Terraform</td>
    <td>Automates the provisioning of Infrastructure on Azure</td>
  </tr>
  <tr>
    <td>Azure Container Registry (ACR)</td>
    <td>Hosts the container image in a repository</td>
  </tr>
  <tr>
    <td>Azure Kubernetes Service (AKS)</td>
    <td>Enables container execution in the Kubernetes cluster it provides</td>
  </tr>
  <tr>
    <td>GitHub Actions</td>
    <td>Provides workflows that automate the process of building, testing, and deploying code </td>
  </tr>
  <tr>
    <td>Azure Monitor</td>
    <td>Collects and analyzes telemetry data from Container Insights and Log Analytics</td>
  </tr>
  <tr>
    <td>Container Insights</td>
    <td>Monitors performance and health of containerized applications within AKS </td>
  </tr>
  <tr>
    <td>Log Analytics</td>
    <td>Provides a centralized storage and management location for log data collected by Azure Monitor and AKS cluster </td>
  </tr>
</table> 


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