// @ts-nocheck
import { test, expect } from '@playwright/test';

import {contactanos} from "../Pages/Contactanos"

test.describe("En este caso realizamos el ingreso a la seccion Contacto", () => {

  test("Ingresar Contacto Correctamente", async ({ page }) => {
    const conta = new contactanos(page);
    await conta.PaginaPrincipal();
    await conta.modalxtrim();
    await conta.SeccionTeLlamamos();
    await conta.SeccionContactos("Prueba","123456789","123456789","");
    //await conta.getContactaMessange();
    
  });
})
