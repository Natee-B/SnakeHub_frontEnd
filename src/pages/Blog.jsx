import React, { useEffect } from 'react'
import MapBlog from '../components/MapBlog'
import useBlogStore from '../store/blogStore'


export default function Blog() {

 
const blog = useBlogStore((state)=>state.blog)
const getBlog = useBlogStore((state)=>state.getBlog)
// console.log("BLOG -->",blog)
useEffect(
  ()=>{
    getBlog()
  },[getBlog]
)
// console.log(getBlog())
  return (
    <div className='flex flex-col gap-20 items-center'>
       <div className=" w-[100%] h-[400px] overflow-hidden">
        <img src="https://www.picsum.photos/2000" alt="Snake Main" />
      </div>
      <div className='flex flex-col w-11/12 gap-20'>
       
       {blog.allBlog.map((el,index) =>(
        <MapBlog key={index} el={el} />
       ))} 
  
      </div>
      <div></div>
    </div>
  )
}
