// Icons
import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { MdAutorenew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import useToken from '../../hooks/useToken'
import { userJustify } from '../../services/MemberServices'

// css
import style from './TableRow.module.scss'
import UserModal from './UserModal'
const TableRow = ({ name, phone, id, key, fullDetails }) => {
  const { token } = useToken()
  const [isOpeModal, setIsOpeModal] = useState(false)
  const [userIsActive, setUserIsActive] = useState(true)

  const userActiveHandler = () => {
    userJustify(token, id).then((res) => {
      setUserIsActive(res.data.data)
    })
  }

  useEffect(() => {
    userActiveHandler()
  }, [])
  return (
    <tr key={key} className={`${style.walletTableRow} `}>
      <td className='py-2 pr-4'>
        <div className='flex items-center gap-2'>
          <div>
            <div>
              <span className='text-sm  text-black sm:text-base dark:text-white'>
                {name}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </td>
      <td className='py-2'>
        <div>
          <div className='flex gap-2 text-sm text-black sm:text-base dark:text-white'>
            <span>{phone}</span>
          </div>
        </div>
      </td>

      <div className='float-left'>
        <td
          className='px-1 py-3 sm:py-2 sm:px-1 cursor-pointer'
          onClick={userActiveHandler}
        >
          <div className='flex flex-col justify-end gap-2 sm:flex-row'>
            <p
              className={`${
                userIsActive == 'true'
                  ? ' bg-green-light dark:bg-green-dark'
                  : ' bg-red-light dark:bg-red-dark'
              } px-2 sm:px-5 py-1 text-sm text-white sm:text-base rounded-lg `}
            >
              {userIsActive == 'true' ? 'خرید فعال' : 'خرید غیر فعال'}
            </p>
          </div>
        </td>
        <td className='px-1 py-3 sm:py-2 sm:px-1'>
          <div className='flex flex-col justify-end gap-2 sm:flex-row'>
            <Link
              to={`/courses/member/${id}`}
              className='px-2 sm:px-5 py-1 text-sm text-white sm:text-base bg-bitcoin-light dark:bg-bitcoin-dark rounded-lg '
            >
              {`دوره ها`}
            </Link>
          </div>
        </td>
        <td className='px-1 py-3 sm:py-2 sm:px-1'>
          <div
            className='flex flex-col justify-end gap-2 sm:flex-row'
            onClick={() => setIsOpeModal(!isOpeModal)}
          >
            <p className='cursor-pointer px-2 sm:px-5 py-1 text-sm text-white sm:text-base bg-bitcoin-light dark:bg-bitcoin-dark rounded-lg  flex justify-center items-center gap-2'>
              نمایش <AiFillEye className='text-xl' />
            </p>
          </div>
        </td>
      </div>
      {/* user Modal*/}
      {isOpeModal && (
        <UserModal fullDetails={fullDetails} close={setIsOpeModal} />
      )}
    </tr>
  )
}

export default TableRow
