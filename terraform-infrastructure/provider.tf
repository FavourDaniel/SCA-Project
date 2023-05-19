terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }
    backend "azurerm" {
      resource_group_name  = "DemoRG"
      storage_account_name = "favourdemostore"
      container_name       = "test"
      key                  = "backend.tfstate"
    }
  }


provider "azurerm" {
  features {}
}

