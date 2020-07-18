import React, { useRef, useCallback } from 'react';

export const FadeIn = () => {
  const observer = useRef();
  const lastCommodity = useCallback(node => {
    if(isLoading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasNextPage) {
        console.log('is intereacting');
        incrementPageNum()
      }
    })
    if(node) observer.current.observe(node)
  }, [isLoading, hasNextPage])
  return (
    <div></div>
  )
}