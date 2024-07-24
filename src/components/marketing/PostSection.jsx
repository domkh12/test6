import React from 'react'
import PostComponent from './PostComponent'
import { NormalButton } from './ButtonPrimary'
const BgNone = "text-marketing-main-color bg-tranparent border-marketing-main-color hover:bg-button-hover hover:text-white hover:border-button-hover";

function PostSection() {
  return (
    <div>
      <nav className='flex flex-col mx-0 mt-32 gap-5 justify-between items-center sm:flex-row sm:items-start sm:mx-16 md:mx-32 lg:mx-60'>
          <h2 className='text-xl font-semibold mt-2'>Lastest Post</h2>
          <ul className='flex flex-row gap-2'>
            <a href=""><NormalButton buttonType={BgNone} text="All"/></a>
            <a href=""><NormalButton buttonType={BgNone} text="Growth"/></a>
            <a href=""><NormalButton buttonType={BgNone} text="Content"/></a>
            <a href=""><NormalButton buttonType={BgNone} text="Social Media"/></a>
          </ul>
      </nav>
    <div className='flex flex-row flex-wrap mx-0 gap-5 items-center justify-center sm:mx-32'>
      <PostComponent
      imageUrl="
      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO
      "
      category="Marketing"
      date="September 1, 2022"
      title="How to increase your Twitter reach by over 200% with this simple trick"
      />
      <PostComponent
      imageUrl="
      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO
      "
      category="Marketing"
      date="September 1, 2022"
      title="How to increase your Twitter reach by over 200% with this simple trick"
      />
      <PostComponent
      imageUrl="
      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO
      "
      category="Marketing"
      date="September 1, 2022"
      title="How to increase your Twitter reach by over 200% with this simple trick"
      />
      <PostComponent
      imageUrl="
      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO
      "
      category="Marketing"
      date="September 1, 2022"
      title="How to increase your Twitter reach by over 200% with this simple trick"
      />
      <PostComponent
      imageUrl="
      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO
      "
      category="Marketing"
      date="September 1, 2022"
      title="How to increase your Twitter reach by over 200% with this simple trick"
      />
      <PostComponent
      imageUrl="
      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO
      "
      category="Marketing"
      date="September 1, 2022"
      title="How to increase your Twitter reach by over 200% with this simple trick"
      />
      <PostComponent
      imageUrl="
      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO
      "
      category="Marketing"
      date="September 1, 2022"
      title="How to increase your Twitter reach by over 200% with this simple trick"
      />
      <PostComponent
      imageUrl="
      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO
      "
      category="Marketing"
      date="September 1, 2022"
      title="How to increase your Twitter reach by over 200% with this simple trick"
      />
    </div>
    </div>
  )
}

export default PostSection
