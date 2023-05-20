[![CI badge](https://github.com/FavourDaniel/SCA-Project/actions/workflows/workflow.yml/badge.svg)](https://github.com/FavourDaniel/SCA-Project/actions)


# SCA-Project
This is my project submission for the SCA Cloud School Bootcamp Cohort 4 program.

## Project Overview
This project is focused on the containerization and deployment of a container to Azure Cloud Platform.

### Architecture Diagram
![AWS Architecture](https://user-images.githubusercontent.com/89241109/239687079-ae3e77e7-64b7-418a-afe5-0e99276dff3f.png)

The express.js `application code` is written and stored in a `GitHub Repository`. Whenever a push is made to this repository, a CI/CD pipeline, built with `GitHub Actions`, is triggered. This pipeline handles the setup of the project and installs the necessary dependencies. It also builds a `Docker image` using the Dockerfile located in the root directory. Once the Docker image is built, it is pushed to an `Azure Container Registry` (ACR) for hosting.

To run the application, an `Azure Kubernetes Service` (AKS) pulls the Docker image and deploys it within a `Kubernetes` Cluster. Within this cluster, a `Deployment` is created, accompanied by a `Persistent Volume Claim` (PVC) and a `Storage Class`. These components ensure data persistence for the containers running in the cluster. The Storage Class is connected to an Azure File Share storage within a `Storage Account` on Azure. Additionally, a `Service` is established to allow public access to the application using a load balancer.

`Terraform` was utilized to provision the infrastructure required for this setup, including the Azure Container Registry (ACR), Azure Kubernetes Service (AKS), Storage Account, and other associated services such as the resource group and AKS role.

Monitoring of the container's performance within AKS is facilitated by `Container Insights`, a feature of Azure Monitor. `Azure Monitor` collects telemetry data from Container Insights and stores it in a `Log Analytics Workspace` as logs.

| Tools & Services | Usage |
| ------- | ------- |
| Docker | Containerizes the Docker Image |
| Terraform | Automates the provisioning of Infrastructure on Azure |
| Azure Container Registry (ACR) | Hosts the container image in a repository |
| Azure Kubernetes Service (AKS) | Enables container execution in the Kubernetes cluster it provides |
| Azure Storage Account | Provisions an Azure File storage to persist volume from the container |
| GitHub Actions | Provides workflows that automate the process of building, testing, and deploying code |
| Azure Monitor | Collects and analyzes telemetry data from Container Insights and Log Analytics |
| Container Insights | Monitors performance and health of containerized applications within AKS |
| Log Analytics Workspace | Provides a centralized storage and management location for log data collected by Azure Monitor and AKS cluster |


## Access the Application

- The application is accessible on this IP Address: http://40.88.195.57

- Inputed feedbacks are accessible at http://40.88.195.57/feedback/title-of-feedback.txt.

![Re_ Share some Feedback! - 19 May 2023](https://user-images.githubusercontent.com/59648161/239600716-7bebd81f-c78b-4173-a6f9-d4f8b1fa09be.gif)

## Setup the Application on your Local
```jsx
npm install express
node server.js
```

## Terraform Commands
```jsx
cd terraform-infrastructure
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```