const PortfolioItem = ({ name, phone }) => {
  return (
    <li className='flex items-center gap-2 pt-2'>
      <div className='flex flex-col flex-1 '>
        <div className='flex justify-between font-medium text-black dark:text-white'>
          <span>
            <span className='text-bitcoin-dark'> {' شماره :  '}</span>
            {phone}
          </span>
          <span dir='rtl' className='break-all text-right pl-3'>
            <span className='text-bitcoin-dark'>{' نام :  '}</span>

            {name}
          </span>
        </div>
      </div>
    </li>
  )
}

export default PortfolioItem
