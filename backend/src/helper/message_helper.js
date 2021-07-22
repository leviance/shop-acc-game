const message_to_client = (location, msg, param, value = null) => {
  let message = {
    location: location, 
    msg: msg, 
    param: param, 
    value: value
  }

  return [message]
}

module.exports.message_to_client = message_to_client;