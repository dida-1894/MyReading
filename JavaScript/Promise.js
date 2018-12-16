function Promise(executor) {
    var self = this
    self.state = 'peding' //Promise 当前状态
    self.data = undefined
    self.onResolvedCallback = []
    self.onRejectedCallback = []
    function reslove(value) {

    }
    function rejected(value) {

    }
    try {
        executor(reslove, rejected)
    } catch (e) {
        rejected(e)
    }
}