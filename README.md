# My Vue.js Portfolio Application

## Description

Cette application Vue.js est un portfolio personnel qui présente différents projets et fournit une page de contact. Elle utilise des composants globaux et des fonctionnalités avancées de Vue.js telles que `mounted()`, `watch()`, et `computed`.

## Table des Matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Composants](#composants)
  - [TodoDeleteButton](#tododeletebutton)
  - [AlertMessage](#alertmessage)
- [Fonctionnalités Vue.js](#fonctionnalités-vuejs)
  - [mounted()](#mounted)
  - [watch()](#watch)
  - [computed](#computed)
  - [methods](#methods)
  - [props](#props)
  - [emit](#emit)
  - [expose](#expose)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/my-portfolio.git
   cd my-portfolio

////////////////////////////

# mounted()

Le hook mounted() est exécuté après que le composant a été monté sur le DOM. Il est utile pour effectuer des actions une fois que le composant est rendu, comme des appels API.

# watch()

Le watch est utilisé pour réagir aux changements de valeurs de propriétés spécifiques. Il est utile pour exécuter du code en réponse à des changements de données.

# computed

Les propriétés computed sont des propriétés calculées qui dépendent d'autres données. Elles sont réactives et sont recalculées lorsque leurs dépendances changent.

# methods

Les methods sont des fonctions définies dans un composant Vue qui peuvent être appelées depuis le template ou d'autres parties du composant.

# props

Les props sont des propriétés passées d'un composant parent à un composant enfant. Elles permettent de transmettre des données aux composants enfants.

# emit

La méthode $emit permet à un composant enfant d'émettre des événements vers le composant parent.

# expose

La méthode expose permet de contrôler quelles propriétés et méthodes sont exposées à l'instance de composant parent.

v-bind:id="exemple" --> :id="exemple"
Même nom abrégé :id="id" --> :id

Méthodes de mutation

Vue est capable de détecter quand les méthodes de mutation d'un réseau réactif sont appelées et de déclencher les mises à jour nécessaires. Ces méthodes de mutation sont:

    push()
    pop()
    shift()
    unshift()
    splice()
    sort()
    reverse()

Explications

    Gestionnaires de Méthodes :
        Les valeurs telles que incrementCounter, foo.bar, ou foo['bar'] sont traitées comme des méthodes.
        Vue appellera la méthode définie dans methods avec le même nom.

    Gestionnaires en Ligne :
        Les valeurs telles que counter++, foo(), ou des expressions comme console.log('clicked') sont évaluées en ligne.
        Vue exécute directement l'expression lors de l'événement.

Avantages et Utilisations

    Méthodes :
        Utiles pour des logiques plus complexes ou réutilisables.
        Plus lisibles et maintenables pour des actions multiples ou des manipulations de données.

    Gestionnaires en Ligne :
        Utiles pour des actions simples ou des modifications mineures.
        Permettent des manipulations rapides sans définir de méthode séparée.
Modificateurs d'événements

C'est un besoin très courant d'appeler event.preventDefault()ou event.stopPropagation()les gestionnaires d'événements intérieurs. Bien que nous puissions le faire facilement à l'intérieur de méthodes, il serait préférable que les méthodes ne concernent que la logique des données plutôt que d'avoir à traiter les détails de l'événement DOM.

Pour remédier à ce problème, Vue fournit des modificateurs d'événements pour v-on. Rappelons que les modificateurs sont des postfixes de directive désignés par un point.

    .stop
    .prevent
    .self
    .capture
    .once
    .passive

modèle

<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>

CONSEIL

L'ordre est important lors de l'utilisation de modificateurs parce que le code pertinent est généré dans le même ordre. Par conséquent, en utilisant @click.prevent.selfempêchera l'action par défaut de clic sur l'élément lui-même et ses enfants, tandis que @click.self.preventn'empêchera l'action par défaut du clic que sur l'élément lui-même.

Le .capture, .once, et .passivemodificateurs reflètent les options du natif addEventListenerMéthode:
modèle

<!-- use capture mode when adding the event listener     -->
<!-- i.e. an event targeting an inner element is handled -->
<!-- here before being handled by that element           -->
<div @click.capture="doThis">...</div>

<!-- the click event will be triggered at most once -->
<a @click.once="doThis"></a>

<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for `onScroll` to complete  -->
<!-- in case it contains `event.preventDefault()`                -->
<div @scroll.passive="onScroll">...</div>

Le .passivele modificateur est généralement utilisé avec les auditeurs d'événements tactiles pour améliorer les performances sur les appareils mobiles.

CONSEIL

Ne pas utiliser .passiveet .preventensemble, parce que .passiveindique déjà au navigateur que vous n'avez pas l'intention d'empêcher le comportement par défaut de l'événement, et vous verrez probablement un avertissement du navigateur si vous le faites.

Enregistrement des crochets sur le cycle de vie
https://vuejs.org/guide/essentials/lifecycle.html

 mounted, updated, et unmounted () {
    console.log(`the component is now mounted.`)
  }

watch() {
  https://vuejs.org/guide/essentials/watchers.html
}

////////////////////////////
# Accès aux réf.
https://vuejs.org/guide/essentials/template-refs.html

La réf résultante est exposée sur this.$refs:
Vue

<!-- <script>
export default {
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<template>
  <input ref="input" />
</template> -->

Using Composables in Options API
​

If you are using Options API, composables must be called inside setup(), and the returned bindings must be returned from setup() so that they are exposed to this and the template:
js

import { useMouse } from './mouse.js'
import { useFetch } from './fetch.js'

export default {
  setup() {
    const { x, y } = useMouse()
    const { data, error } = useFetch('...')
    return { x, y, data, error }
  },
  mounted() {
    // setup() exposed properties can be accessed on `this`
    console.log(this.x)
  }
  // ...other options
}

J'en suis la
https://vuejs.org/guide/extras/reactivity-in-depth.html#runtime-vs-compile-time-reactivity
  
  
