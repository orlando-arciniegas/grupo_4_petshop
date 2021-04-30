-- MySQL Script generated by MySQL Workbench
-- Sun Apr 25 19:38:31 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema petshop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema petshop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `petshop` DEFAULT CHARACTER SET utf8 ;
USE `petshop` ;

-- -----------------------------------------------------
-- Table `petshop`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(60) NOT NULL,
  `lastName` VARCHAR(60) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `image` VARCHAR(60) NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf16;


-- -----------------------------------------------------
-- Table `petshop`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `slug` VARCHAR(45) NOT NULL,
  `description` TEXT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf16;


-- -----------------------------------------------------
-- Table `petshop`.`userRole`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`userRole` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usersId` INT NOT NULL,
  `rolesId` INT NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_role_users_idx` (`usersId` ASC),
  INDEX `fk_user_role_roles1_idx` (`rolesId` ASC),
  CONSTRAINT `fk_user_role_users`
    FOREIGN KEY (`usersId`)
    REFERENCES `petshop`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_roles1`
    FOREIGN KEY (`rolesId`)
    REFERENCES `petshop`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf16;


-- -----------------------------------------------------
-- Table `petshop`.`permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`permissions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `slug` VARCHAR(45) NOT NULL,
  `description` TEXT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`rolePermission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`rolePermission` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `roleId` INT NOT NULL,
  `permissionId` INT NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_role_permission_roles1_idx` (`roleId` ASC),
  INDEX `fk_role_permission_permissions1_idx` (`permissionId` ASC),
  CONSTRAINT `fk_role_permission_roles1`
    FOREIGN KEY (`roleId`)
    REFERENCES `petshop`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_permission_permissions1`
    FOREIGN KEY (`permissionId`)
    REFERENCES `petshop`.`permissions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `image` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `description` TEXT NOT NULL,
  `image` VARCHAR(60) NULL,
  `price` INT(10) NOT NULL,
  `stock` INT(6) NOT NULL,
  `discountPercentage` TINYINT NULL DEFAULT 0,
  `sku` VARCHAR(45) NULL,
  `categoryId` INT NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_category1_idx` (`categoryId` ASC),
  CONSTRAINT `fk_products_category1`
    FOREIGN KEY (`categoryId`)
    REFERENCES `petshop`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `totalPrice` INT(10) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `userId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_users1_idx` (`userId` ASC),
  CONSTRAINT `fk_cart_users1`
    FOREIGN KEY (`userId`)
    REFERENCES `petshop`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`cartProduct`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`cartProduct` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT(6) NOT NULL,
  `cartId` INT NOT NULL,
  `productId` INT NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_prduct_cart1_idx` (`cartId` ASC),
  INDEX `fk_cart_prduct_products1_idx` (`productId` ASC),
  CONSTRAINT `fk_cart_prduct_cart1`
    FOREIGN KEY (`cartId`)
    REFERENCES `petshop`.`carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_prduct_products1`
    FOREIGN KEY (`productId`)
    REFERENCES `petshop`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
