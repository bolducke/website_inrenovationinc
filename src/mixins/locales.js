export default {
    name: 'Locales',

    data: () => ({
        languages: [
            'Français',
            'English'
        ],
        locales: [
            'fr',
            'en'
        ]
    }),
    beforeCreate() {
        if (localStorage.locale != undefined) {
            this.$root.$i18n.locale = localStorage.locale;
        } else {
            localStorage.locale = this.$root.$i18n.fallbackLocale;
        }
    },
    computed: {
        selectedLanguage: {
            get: function() {
                return this.locales.indexOf(this.$root.$i18n.locale)
            },
            set: function (val) {
                const locale = this.locales[val]
                this.$root.$i18n.locale = locale
                localStorage.locale = locale
            }
        },
        language: {
            get:  function(){
                return this.languages[this.selectedLanguage]
            },
        },
        locale: {
            get:  function(){
                return this.locales[this.selectedLanguage]
            },
            set: function (val) {
                this.selectedLanguage = val;
            }
        },
        peekNext(){
            return this.locales[this.up()]
        },
        peekPrevious(){
            return this.locales[this.down()]
        },
    },
    methods: {
        up() {
            return this.selectedLanguage + 1 === this.locales.length ? 0 : this.selectedLanguage + 1
        },
        down() {
            return this.selectedLanguage - 1 < 0 ? this.locales.length - 1 : this.selectedLanguage - 1
        },
        next() {            
            this.selectedLanguage = this.up()
        },
        prev() {            
            this.selectedLanguage = this.down()
        },
    }
}
