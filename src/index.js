Vue.directive('infiniteScroll', {
  params: ['scroll-disabled', 'scroll-distance'],
  bind: function(){
    var self = this
    var disabledExpr = self.params.scrollDisabled || 'busy'
    var distance = self.params.scrollDistance || 0
    var disabled =  false

    self.vm.$watch(disabledExpr, function (value) {
        disabled = value
    })
    disabled = this.vm.$get(disabledExpr)

    window.addEventListener('scroll', function(){
      if (disabled) return
      if (document.body.offsetHeight - distance <= document.body.scrollTop + window.innerHeight) {
         self.vm.$get(self.expression)
      }

    })
  }
})
