// Utilities

export default function (sections = []) {
  return {
    name: 'LoadSections',

    // Iterates the provide list of components
    // and returns a function that returns a
    // Promise.
    components: sections.reduce((acc, cur) => {
      acc[`Section${cur}`] = () => import(`@/views/sections/${cur}.vue`)

      return acc
    }, {}),

    data: () => ({ sections }),
  }
}
