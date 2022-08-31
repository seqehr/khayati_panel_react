import React, { useEffect, useState } from 'react'
import { Line } from 'rc-progress'
import { toast } from 'react-toastify'
// css
import styles from './UploadModal.module.scss'
//icons
import { BsDashCircleDotted } from 'react-icons/bs'
//motions
import framerConfig from '../../utils/framerConfig.json'
import { motion } from 'framer-motion'

// components
import UploadBox from './SideBar/UploadBox'
import ItemDetails from './SideBar/ItemDetails'
import ListItems from './ListItems'
//services
import { UploadedFiles } from '../../services/ProductServices'
//hooks
import useToken from '../../hooks/useToken'
import useUpload from '../../hooks/useUpload'

const UploadModal = ({ setIsOpenModal, getImage, pageMode }) => {
  const { setFiles, files } = useUpload()
  const { token } = useToken()
  const [loading, setLoading] = useState(true)
  //paginattion
  const [perpage, setPerpage] = useState(12)
  const [page, setPage] = useState(0)
  const [totalPages, settotalPages] = useState(0)

  // animation config
  const { container, item } = framerConfig

  // file details states
  const [type, setType] = useState('')
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [itemId, setItemId] = useState('')

  const { filter, setFilter } = useUpload()
  useEffect(() => {
    // get uploaded files
    UploadedFiles(token).then((res) => {
      setFiles(res.data.data)
      setLoading(false)
      // pagination
      settotalPages(
        Math.ceil(
          res.data.data.length >= perpage ? res.data.data.length / perpage : 0
        )
      )
    })
  }, [])

  const detailsHandler = ({ type, name, link, itemId }) => {
    setType(type)
    setLink(link)
    setName(name)
    setItemId(itemId)
  }

  return (
    <div
      className={`${pageMode !== true && styles.myLink} ${
        pageMode !== true
          ? 'bg-[#212121b4] fixed px-24 py-16 w-screen h-screen overflow-y-scroll'
          : 'px-10 '
      }    top-0 left-0 z-[999] `}
    >
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='container  grid grid-cols-12'
      >
        {/* Close Modal*/}
        {pageMode !== true && (
          <motion.div
            variants={item}
            className='md:sticky md:top-0 col-span-12  grid grid-cols-12'
            onClick={() => setIsOpenModal(false)}
          >
            <div
              className={`${styles.rotation}  text-red-light dark:text-white   font-bold cursor-pointer 2xl:col-span-2  md:col-span-4  col-span-12 justify-center items-center flex bg-background2-light dark:bg-background2-dark rounded-lg p-2 py-2 mb-4`}
            >
              <BsDashCircleDotted
                className={`${styles.rotationTarget} text-2xl ml-3 ease-in-out duration-300`}
              />
              <p className='ease-in-out duration-300 textBordered'>بستن صفحه</p>
            </div>
          </motion.div>
        )}

        {/* SideBar Details - uploads*/}
        <motion.div
          variants={item}
          className={`${
            pageMode !== true && 'md:top-14'
          } md:sticky  md:col-span-4 h-max  col-span-12 bg-background2-light dark:bg-background2-dark rounded-lg p-4`}
        >
          <UploadBox />
          <ItemDetails
            setIsOpenModal={setIsOpenModal}
            getImage={getImage}
            details={{ type, name, link, itemId }}
            setFiles={setFiles}
            files={files}
            pageMode={pageMode}
          />
        </motion.div>

        {/* List Items*/}

        <ListItems
          getDetails={detailsHandler}
          loading={loading}
          page={page}
          perpage={perpage}
          totalPages={totalPages}
          setPage={setPage}
        />
      </motion.div>
    </div>
  )
}

export default UploadModal
