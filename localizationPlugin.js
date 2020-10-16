import {localization} from './localizationMixin'
export default {
    install: (app, options) => {
        if(options != undefined){
            const languagesPath = options.customPath != undefined ? options.customPath : 'assets/lang' 
            app.provide('languagesPath', languagesPath)
            app.provide('language', options.language)
            app.mixin(localization)
        }else{
            console.error('Please pass currentLanguage or customLanguage ')
        }
    }
  }