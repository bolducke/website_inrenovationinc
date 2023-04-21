import Vue from 'vue'

export default Vue.observable({
  state: {
    business : [
        {
          icon: 'mdi-clock',
          text: '24/7',
          html: '24/7',
        },
        {
          icon: 'mdi-cellphone',
          text: '(514) 249-3737',
          html: '(514) 249-3737',
          contents: ['5142493737']
        },
        {
          icon: 'mdi-email',
          text: 'info@inrenovation.com',
          html: 'info@inrenovation.com',
          contents: ['info@inrenovation.com']
        },
        {
          icon: 'mdi-map-marker',
          text: 'Montréal, QC',
          html: 'Montréal, QC'
        }
    ],
    services: {
      sections: [{
        section: "general",
      },
      {
      section: "kitchen",
        },
      {
        section: "bathroom",
      },
      {
        section: "basement",
      },
      {
        section: "exterior",
      },
      {
        section: "commercial-institutional",
      },
      {
        section: "urban-heritage",
      },
      {
        section: "carpentry"
      }
    ]
    },
    gallery: {

    },
  }
});