// Write your solution in this file!
var driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return (driver = { name: 'Sam', address: '11 Broadway' })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return (driver = { name: 'Sam', address: '12 Broadway' })
}
