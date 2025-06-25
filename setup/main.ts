import { defineAppSetup } from "@slidev/types";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

export default defineAppSetup(({ app, router }) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });
  app.use(ConfirmationService);
  app.use(ToastService);
});
