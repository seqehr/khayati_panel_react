import { Link } from 'react-router-dom'

// css
import style from '../TableRow.module.scss'
const TableRow = ({ name, id, handleDelete }) => {
  return (
    <tr key={id} className={`${style.walletTableRow} `}>
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

    

      <div className='float-left'>
        <td className='px-1 py-3 sm:py-2 sm:px-1'>
          <div className='flex flex-col justify-end gap-2 sm:flex-row'>
            <button
              onClick={() => {
                handleDelete(id)
              }}
              className='px-2 sm:px-5 py-1 text-sm text-white sm:text-base bg-red-light dark:bg-red-dark rounded-2xl '
            >
              {`پاک کردن`}
            </button>
          </div>
        </td>
      
      </div>
    </tr>
  )
}

export default TableRow
