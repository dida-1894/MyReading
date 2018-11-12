let respones = {
  get body() {
    return this._body
  },
  set body(value) {
    this.res.statusCode = 200
    this._body = value
  }
}

//最后输出在页面上的数据时res.end

module.exports = respones
