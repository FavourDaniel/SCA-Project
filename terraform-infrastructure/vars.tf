variable "resource_group_name" {
  description = "Name of the Resource Group"
  default     = "DemoRG"
  type        = string
}

variable "location" {
  description = "Location of the Resource Group"
  default     = "East US"
  type        = string
}

variable "container_registry_name" {
  description = "The name of the Azure Container Registry"
  default     = "scacontainerregistry"
  type        = string
}

variable "registry-sku" {
  description = "Storage Capacity"
  default     = "Basic"
  type        = string
}

variable "storage_account_name" {
  description = "The name of the storage account"
  default     = "favourdemostore"
  type        = string
}


variable "aks_cluster_name" {
  description = "Name of the AKS cluster"
  default     = "myAKSCluster"
  type        = string
}


variable "dns_prefix" {
  description = "The name of the DNS Prefix"
  default     = "akscluster"
  type        = string
}

variable "default_node_pool" {
  description = "The name of the Node Pool"
  default     = "aksnodepool"
  type        = string

}

variable "np-vm-vm_size" {
  description = "VM size of Node Pool"
  default     = "Standard_D2_v2"
  type        = string
}

variable "np_identity" {
  description = "Grant nodes in a node pool access to Azure resources and services"
  default     = "SystemAssigned"
  type        = string
}

variable "tag" {
  default = "scacluster"
}



# variable "file_share_name" {
#   description = "The name of the file share to create."
#   default     = "myfileshare"
#   type        = string
# }

# variable "storage_share_quota" {
#   description = "The quota of the storage share in GB"
#   default     = 50
#   type        = string
# }
