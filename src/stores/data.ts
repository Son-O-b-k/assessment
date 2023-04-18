import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  
  state: () => ({
    menu:[
      {
        name:"Product",
        link:""
      },
      {
          name:"Features",
          link:""
      },
      {
          name:"Support",
          link:""
      }
    ]
  })

});
