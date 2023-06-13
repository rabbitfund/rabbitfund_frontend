import { localize, setLocale } from "@vee-validate/i18n";
import zh_TW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import AllRules from "@vee-validate/rules";
import { defineRule, configure } from "vee-validate";

export default defineNuxtPlugin((_nuxtApp) => {
  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

  configure({
    generateMessage: localize({ zh_TW: zh_TW }),
    validateOnInput: true,
  });

  setLocale("zh_TW");
});