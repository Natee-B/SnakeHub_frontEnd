import React from 'react'
import MapBlog from '../components/MapBlog'

export default function Blog() {
  const BlogData = [
    {
    id : 1,
    title : "Header 1",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut officiis minima cupiditate! Vel rem numquam quisquam! Soluta suscipit enim fugiat reprehenderit, facere adipisci laborum vitae dolorum tenetur ex velit!",
    img : "Img"
  },  {
    id : 2,
    title : "Header 2",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut officiis minima cupiditate! Vel rem numquam quisquam! Soluta suscipit enim fugiat reprehenderit, facere adipisci laborum vitae dolorum tenetur ex velit!",
    img : "Img"
  },  {
    id : 3,
    title : "Header 3",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut officiis minima cupiditate! Vel rem numquam quisquam! Soluta suscipit enim fugiat reprehenderit, facere adipisci laborum vitae dolorum tenetur ex velit!",
    img : "Img"
  },  {
    id : 4,
    title : "Header 4",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut officiis minima cupiditate! Vel rem numquam quisquam! Soluta suscipit enim fugiat reprehenderit, facere adipisci laborum vitae dolorum tenetur ex velit!",
    img : "Img"
  },
]
  return (
    <div className='flex flex-col gap-20 items-center'>
       <div className=" w-[100%] h-[400px] overflow-hidden">
        <img src="https://www.picsum.photos/2000" alt="Snake Main" />
      </div>
      <div className='flex flex-col w-11/12 gap-20'>
       
       {BlogData.map((el,index) =>(
        <MapBlog key={index} el={el} />
       ))} 
  
      </div>
      <div></div>
    </div>
  )
}
