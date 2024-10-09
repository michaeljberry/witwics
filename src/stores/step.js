import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStepStore = defineStore('step', () => {

  const steps = ref({
    home: {
      name: 'Home',
      href: '/',
      status: '',
    },
    leg1: {
      name: 'Leg 1',
      href: '/chase/leg1',
      status: '',
    },
    leg2: {
      name: 'Leg 2',
      href: '/chase/leg2',
      status: '',
    },
    leg3: {
      name: 'Leg 3',
      href: '/chase/leg3',
      status: '',
    },
    lightningRound: {
      name: 'Leg 1',
      href: '/chase/lightninground',
      status: '',
    },
    wager: {
      name: 'Wager',
      href: '/chase/wager',
      status: '',
    },
    lockUp: {
      name: 'Lock Up',
      href: '/chase/lockup',
      status: '',
    },
    headToHead: {
      name: 'Head to Head',
      href: '/chase/headtohead',
      status: '',
    },
    finalChase: {
      name: 'Final Chase',
      href: '/chase/finalchase',
      status: '',
    },
  })

  return { steps }
})