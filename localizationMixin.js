export const localization = {
    inject: ['languagesPath', 'language'],
    data() {
        return {
            lang: null
        }
    },
    created() {
        this.getLanguage(this.language)
        const that = this
        String.prototype.tr = function (param = '') {
            return that.lang ? that.lang[this] : ''
        }
    },
    methods: {
        async getLanguage({ useCurrentLanguage, useCustomLanguage }) {
            const language = useCurrentLanguage
                ? window.navigator.userLanguage || window.navigator.language
                : useCustomLanguage;
            const currentLang = await import(`@/${this.languagesPath}/${language}.json`);
            this.lang = currentLang.default
        }
    }
}