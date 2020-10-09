import React from 'react';
import styles from './index.less'
const imgCache:any = {
  __cache: {},
  read(src:string) {
    if (!this.__cache[src]) {
      this.__cache[src] = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          this.__cache[src] = true;
          resolve(this.__cache[src]);
        };
        img.src = src;
      }).then((img) => {
        this.__cache[src] = true;
      });
    }
    if (this.__cache[src] instanceof Promise) {
      throw this.__cache[src];
    }
    return this.__cache[src];
  }
};


interface N {
  src?:string|undefined;
  [rest:string]:any;
}

const SuspenseImage :React.FC<N>= ({src,...rest}) => {
  imgCache.read(src);
return(
  <img className={styles.img} src={src} alt=""/>
  );
}

export default  SuspenseImage;
