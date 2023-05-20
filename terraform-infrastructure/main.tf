# Create Resource Group
resource "azurerm_resource_group" "DemoRG" {
  name     = var.resource_group_name
  location = var.location
}


# Create Azure Container Registry
resource "azurerm_container_registry" "scacontainerregistry" {
  name                = var.container_registry_name
  resource_group_name = var.resource_group_name
  location            = var.location
  sku                 = var.registry-sku
}


# Create Storage Account to house Azure File Share
resource "azurerm_storage_account" "storage" {
  name                     = var.storage_account_name
  resource_group_name      = var.resource_group_name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
}


# Create Kubernetes Cluster (AKS)
resource "azurerm_kubernetes_cluster" "aks" {
  name                = var.aks_cluster_name
  resource_group_name = var.resource_group_name
  location            = var.location
  dns_prefix          = var.dns_prefix

  default_node_pool {
    name       = var.default_node_pool
    node_count = 1
    vm_size    = var.np-vm-vm_size
  }

  identity {
    type = var.np_identity
  }

  tags = {
    name = var.tag
  }
}

resource "azurerm_role_assignment" "acrpull_role" {
  scope                            = azurerm_container_registry.scacontainerregistry.id
  role_definition_name             = "AcrPull"
  principal_id                     = azurerm_kubernetes_cluster.aks.identity[0].principal_id
  skip_service_principal_aad_check = true
}


