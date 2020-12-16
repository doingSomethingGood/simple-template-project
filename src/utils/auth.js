export function getSessionStorage(name, defaultValue) {
  let value = defaultValue
  const storage = sessionStorage.getItem(name)
  if (storage) {
    if (typeof defaultValue === 'object') {
      value = JSON.parse(storage)
    } else if (typeof defaultValue === 'number') {
      value = Number(storage)
    } else {
      value = storage
    }
  }
  return value
}

export function setSessionStorage(name, value) {
  if (typeof value === 'object') {
    sessionStorage.setItem(name, JSON.stringify(value))
  } else {
    sessionStorage.setItem(name, value)
  }
}

export function removeStorage(name, type) {
  if (type === 'localStorage') {
    localStorage.removeItem(name)
  } else {
    sessionStorage.removeItem(name)
  }
}
