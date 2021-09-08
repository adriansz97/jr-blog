const isAuthenticatedGuard = async (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100

    if (random > 50) {
      console.log('esta autenticado', random)
      next()
    } else {
      console.log('bloqueado por el isauthenticatedguard', random);
      next({ name: 'pokemon-home' })
    }
  })
}

export default isAuthenticatedGuard