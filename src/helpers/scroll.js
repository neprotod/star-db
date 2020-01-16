const contentScroll = () => {
  try {
    const box = document.querySelector('.content').getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + box.top,
      behavior: 'smooth',
    });
  } catch (e) {
    console.log('Error scroll');
  }
};

// eslint-disable-next-line import/prefer-default-export
export { contentScroll };
