function lazyLoad(targetElement, intersectionOptions) {
  new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      console.log('object', 123);
    }
  }, intersectionOptions);
}
