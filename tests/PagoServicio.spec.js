// @ts-nocheck
import { test, expect } from '@playwright/test';

import {PagaServicio} from "../Pages/PagaServicio"

test.describe("En este caso realizamos el ingreso a la seccion Pago Servicio", () => {

  test("Ingresar Pago Servicio Correctamente", async ({ page }) => {
    const pagaServicio = new PagaServicio(page);
    await pagaServicio.PaginaPrincipal();
    await pagaServicio.modalxtrim();
    await pagaServicio.PagosRapidos();
    await pagaServicio.Continuar();
    await pagaServicio.getPagoRapidoMessange()
    //await conta.getContactaMessange();
    
  });
})
