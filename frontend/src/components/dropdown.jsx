'use client'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {logout} from "../helpers/util.jsx";
import styles from "../app/css/dropdown.module.css";


export default function App() {
  function handleClickLogout(){
    logout();
    window.location.href = '/';
  }
  return (
    <Dropdown className={styles.mainContainer}>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className={styles.buttonCustom}
        >
          Perfil
        </Button>
      </DropdownTrigger>
      <DropdownMenu className={styles.dropdownMenu} aria-label="Static Actions">
        <DropdownItem key="perfil" className={styles.dropdown} href="/perfil">Configurações</DropdownItem>
        <DropdownItem key="favoritos" className={styles.dropdown} href="/favorite">Favoritos</DropdownItem>
        <DropdownItem key="delete" className={styles.logout} color="danger" onClick={handleClickLogout}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
