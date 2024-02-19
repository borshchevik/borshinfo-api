const path = require('path')

const CHAIN = Symbol('borsh.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.borshinfo.lib.Chain.get(this.config.borsh.chain)
    return this[CHAIN]
  },
  get borshinfo() {
    return {
      lib: require(path.resolve(this.config.borshinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.borshinfo.path, 'rpc'))
    }
  }
}
