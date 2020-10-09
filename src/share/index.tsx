import React from 'react';

interface Props {
  url?:String
}

const ShareDemo: React.FC<Props> = ({url}) => {

return(
  <>
<a href="http://service.weibo.com/share/share.php?appkey=&title=填上你的标题pl&url=https://www.jianshu.com/p/e2884dfdbfc4&searchPic=false&style=simple" target="_blank">share weibo</a>
<a href="https://www.facebook.com/sharer.php?title=填上你的标题&u=https://www.jianshu.com/p/e2884dfdbfc4"
  target="_blank">Facebook</a>
<a href="https://twitter.com/share?text=填上你的标题&u=https://www.jianshu.com/p/e2884dfdbfc4"
  target="_blank">Twitter</a>
</>

);
}

export default  ShareDemo;
