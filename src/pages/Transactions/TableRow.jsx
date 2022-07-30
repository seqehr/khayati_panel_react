// Icons
import { MdAutorenew } from 'react-icons/md'

// css
import style from './TableRow.module.scss'
const WalletTableRow = ({ createdDate, type, userId, price }) => {
  return (
    <tr className={`${style.walletTableRow} `}>
      <td className='py-2 pr-4'>
        <div className='flex items-center gap-2'>
          <div>
            <div>
              <span className='text-sm  text-black sm:text-base dark:text-white'>
                {userId}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className='py-2 '>
        <div className='flex items-center gap-2'>
          <div>
            <div>
              <span className='text-sm  text-black sm:text-base dark:text-white'>
                {type}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </td>
      <td className='py-2 '>
        <div className='flex items-center gap-2'>
          <div>
            <div>
              <span className='text-sm  text-black sm:text-base dark:text-white'>
                {price}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className='py-2 '>
        <div className='flex items-center gap-2'>
          <div>
            <div>
              <span className='text-sm  text-black sm:text-base dark:text-white'>
                {createdDate == []
                  ? `${createdDate[0]}/${createdDate[1]}/${createdDate[2]}`
                  : 'نامشخص'}
              </span>
            </div>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default WalletTableRow
