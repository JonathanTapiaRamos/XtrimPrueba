// @ts-nocheck
import { test, expect } from '@playwright/test';

import {Zapping} from "../Pages/Zapping"

test.describe("En este caso realizamos el ingreso a la seccion Zapping", () => {

  test("Ingresar Zapping Correctamente", async ({ page }) => {
    const zapping = new Zapping(page);
    await zapping.PaginaPrincipal();
    await zapping.modalxtrim();
    await zapping.SeccionZapping();
    await zapping.ContrataloAqui();
    await zapping.getContactaMessange()
    
  });
})
