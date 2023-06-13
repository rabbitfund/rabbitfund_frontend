import { localize, setLocale } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import zh_TW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import AllRules from "@vee-validate/rules";
import { defineRule, configure } from "vee-validate";

export default defineNuxtPlugin((_nuxtApp) => {
  configure({
    generateMessage: localize({
      en,
      zh_TW,
    }),
    validateOnInput: true,
  });

  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

  setLocale("zh_TW");
});