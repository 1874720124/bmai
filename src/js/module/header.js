define(['jquery'], $ => {
    function Header () {
      this.container = $("#header-container");
      this.load()
      // .then(() => {
      //   this.search();
        
      // })
    }
    $.extend(Header.prototype, {
      load () {
        return new Promise(resolve => {
          this.container.load('/html/module/header.html', () => {
            // load异步执行结束
            resolve();
          });
        })
      }
      // ,
      // search () {

      // }
    })
    return new Header();
  });