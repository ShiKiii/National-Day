$(function () {
  var direction = {
    up:1,
    down:2
  };

//音乐按钮
  var audio = $('#audio')[0];
  $('.music-p').click(function () {
    if (audio.paused) {
      audio.play();
      this.style.opacity = '1';
    } else {
      audio.pause();
      this.style.opacity = "0";
    }

  })

//初始化当前页面的数字
  var nowIndex=1;
  var lastIndex=0;
  var isMoving=false;

  $(document).swipeUp(function () {
    //判断页面是否在滑动
    console.log('up'+nowIndex,lastIndex)
    if(isMoving){
      return
    }
    // 滑屏之后就交换
    lastIndex=nowIndex;
    //是不是最后一页
    if(lastIndex<4){
      nowIndex=lastIndex+1;
      movePage(direction.up)

    }
  })

//向下滑动
  $(document).swipeDown(function () {
    //判断页面是否在滑动
    console.log('down'+nowIndex,lastIndex)
    console.log('xxxxx')
    if(isMoving){
      return
    }
    lastIndex=nowIndex;
    //是不是最后一页
    if(lastIndex>1){
      nowIndex=lastIndex-1;
      movePage(direction.down)

    }
  });

  function movePage(dir) {
    var lastPage = '.page-'+ lastIndex;
    var nowPage = '.page-' + nowIndex;

    var outClass = '';
    var inClass = '';

    switch (dir){
      case direction.up:
        outClass = 'pt-page-moveToTop';
        inClass = 'pt-page-moveFromBottom';
        break;
      case direction.down:
        outClass = 'pt-page-moveToBottom';
        inClass = 'pt-page-moveFromTop';
        break;
    }

    //为页面添加动画开始的类
    $(nowPage).removeClass('hide');
    $(lastPage).addClass(outClass);
    $(nowPage).addClass(inClass);
    isMoving=true;
    /*动画执行完清除动画类*/




    setTimeout(function () {
      $(lastPage).removeClass(outClass);
      $(lastPage).addClass('hide');
      $(lastPage).removeClass('page-current');

      $(lastPage).find('img').addClass('hide');

      $(nowPage).removeClass(inClass);
      $(nowPage).addClass('page-current');

      $(nowPage).find('img').removeClass('hide');


      isMoving = false;
    },600);
  }



})
