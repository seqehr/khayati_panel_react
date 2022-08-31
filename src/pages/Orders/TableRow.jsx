// Icons
import { MdAutorenew } from 'react-icons/md'
import { Link } from 'react-router-dom'

// css
import style from './TableRow.module.scss'
const TableRow = ({ fullDetail }) => {
  console.log(fullDetail)
  return (
    <tr key={fullDetail.id} className={`${style.walletTableRow} `}>
      <td className='py-2 pr-4'>
        <div className='flex items-center gap-2'>
          <div>
            <div>
              <span className='text-sm  text-black sm:text-base dark:text-white'>
                {fullDetail.type}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </td>

      <td className='py-2 pr-4'>
        <div className='flex items-center gap-2'>
          <div>
            <div>
              <span className='text-sm  text-black sm:text-base dark:text-white'>
                {fullDetail.date.map((i) => i).join('/')}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </td>
      <td className='py-2 pr-4'>
        <div className='flex items-center gap-2'>
          <div>
            <div>
              <span className='text-sm  text-black sm:text-base dark:text-white'>
                {fullDetail.status}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </td>
      <td className='py-2 pr-4'>
        <div className='flex items-center gap-2'>
          <div>
            <div>
              <span className='text-sm  text-black sm:text-base dark:text-white'>
                {fullDetail.user.phone}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </td>
      <div className='float-left'>
        <td className='px-1 py-3 sm:py-2 sm:px-1'>
          <div className='flex flex-col justify-end gap-2 sm:flex-row'>
            <p className='px-2 sm:px-5 py-1 text-sm text-white sm:text-base bg-bitcoin-light dark:bg-blue-dark rounded-lg '>
              {`نمایش اطلاعات کاربر`}
            </p>
          </div>
        </td>
      </div>
    </tr>
  )
}

export default TableRow
