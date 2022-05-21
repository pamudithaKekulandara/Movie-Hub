export const addCart = (movie) => {
  return {
    type: 'ADDITEM',
    payload: movie,
  }
}

export const delCart = (movie) => {
  return {
    type: 'DELITEM',
    payload: movie,
  }
}
