-- MySQL Script generated by MySQL Workbench
-- Sat Apr 10 00:06:05 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

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
  `first_name` VARCHAR(60) NOT NULL,
  `last_name` VARCHAR(60) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `image` VARCHAR(60) NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
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
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf16;


-- -----------------------------------------------------
-- Table `petshop`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`user_role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `roles_id` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_role_users_idx` (`users_id` ASC),
  INDEX `fk_user_role_roles1_idx` (`roles_id` ASC),
  CONSTRAINT `fk_user_role_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `petshop`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_roles1`
    FOREIGN KEY (`roles_id`)
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
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`role_permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`role_permission` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_role_permission_roles1_idx` (`role_id` ASC),
  INDEX `fk_role_permission_permissions1_idx` (`permission_id` ASC),
  CONSTRAINT `fk_role_permission_roles1`
    FOREIGN KEY (`role_id`)
    REFERENCES `petshop`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_permission_permissions1`
    FOREIGN KEY (`permission_id`)
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
  `discount_percentage` TINYINT NULL DEFAULT 0,
  `sku` VARCHAR(45) NULL,
  `category_id` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_category1_idx` (`category_id` ASC),
  CONSTRAINT `fk_products_category1`
    FOREIGN KEY (`category_id`)
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
  `total_price` INT(10) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_users1_idx` (`user_id` ASC),
  CONSTRAINT `fk_cart_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `petshop`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`cart_prduct`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`cart_prduct` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT(6) NOT NULL,
  `cart_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_prduct_cart1_idx` (`cart_id` ASC),
  INDEX `fk_cart_prduct_products1_idx` (`product_id` ASC),
  CONSTRAINT `fk_cart_prduct_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `petshop`.`carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_prduct_products1`
    FOREIGN KEY (`product_id`)
    REFERENCES `petshop`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;