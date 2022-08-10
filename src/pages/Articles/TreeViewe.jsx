import React, { useEffect, useState } from 'react'
// hooks
import useCategories from '../../hooks/useCategories'
// icons
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs'
const TreeView = ({ explorer }) => {
  const [expand, setExpand] = useState(false)
  const { checked, setChecked } = useCategories()

  return (
    <div>
      <div className={` pb-1 `}>
        {explorer.root !== true && (
          <input
            checked={checked == explorer.id}
            onClick={() => {
              setChecked(explorer.id)
            }}
            className='ml-2 shadow-md cursor-pointer '
            type={'checkbox'}
          />
        )}
        <span
          className='cursor-context-menu hover:animate-pulse  text-black dark:text-white'
          onClick={() => setExpand(!expand)}
        >
          {explorer.name}
        </span>
        {explorer.children.length !== 0 ? (
          expand ? (
            <BsChevronDown className='inline mr-1 text-xs  text-black dark:text-white' />
          ) : (
            <BsChevronLeft className='inline mr-1 text-xs  text-black dark:text-white' />
          )
        ) : (
          <></>
        )}

        <br />
        <div style={{ display: expand ? 'block' : 'none', paddingRight: 15 }}>
          {explorer.children.map((explore) => (
            <TreeView key={explore.name} explorer={explore} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TreeView
