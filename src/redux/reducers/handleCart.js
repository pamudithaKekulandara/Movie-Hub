const cart = []

const handleCart = (state = cart, action) => {
  const movie = action.payload
  switch (action.type) {
    case 'ADDITEM':
      // Check if movie is Already Exist
      const exist = state.find((x) => x._id === movie._id)
      if (exist) {
        // Increase the Quantity
        return state.map((x) =>
          x._id === movie._id ? { ...x, qty: x.qty + 1 } : x
        )
      } else {
        const movie = action.payload
        return [
          ...state,
          {
            ...movie,
            qty: 1,
          },
        ]
      }
      break

    case 'DELITEM':
      const exist1 = state.find((x) => x._id === movie._id)
      if (exist1.qty === 1) {
        return state.filter((x) => x._id !== exist1._id)
      } else {
        return state.map((x) =>
          x.id === movie._id ? { ...x, qty: x.qty - 1 } : x
        )
      }
      break

    default:
      return state
      break
  }
}

export default handleCart
