import WebFontLoader from 'webfontloader'

// async load fonts
WebFontLoader.load({
  google: {
    families: [
      'Mulish:wght@300;400;500;700&display=swap',
      'Work+Sans:100,300,400,500,700,900&display=swap',
      //'PT+Sans:400,700&display=swap',
      //'Work+Sans:100,300,400,500,700,900&display=swap',
    ],
  },
})
