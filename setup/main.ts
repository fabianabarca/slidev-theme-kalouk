import { defineAppSetup } from "@slidev/types";
import PrimeVue from "primevue/config";
import Kalouk from "./kalouk";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

export default defineAppSetup(({ app, router }) => {
  app.use(PrimeVue, {
    theme: {
      preset: Kalouk,
    },
  });
  app.use(ConfirmationService);
  app.use(ToastService);
});
