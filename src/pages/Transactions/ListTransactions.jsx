// Components
import TableRow from "./TableRow";

const ListTransactions = (props) => {
  return (
    <div>
      <table className="w-full overflow-hidden rounded-2xl">
        <thead
          className={`${"text-right"} bg-[#80808033] text-black dark:text-white `}
        >
          <th className="px-2 py-2 pr-4">{`کاربر`}</th>
          <th>{`تاریخ ثبت `}</th>
          <th>{`مقدار `}</th>
          <th></th>
          <th></th>
        </thead>
        <tbody className="bg-background2-light dark:bg-background2-dark ">
          <TableRow name={`سینا رضوانی `} date={`1400/3/1`} worth={`520000`} />
          <TableRow name={`سینا رضوانی `} date={`1400/3/1`} worth={`520000`} />
          <TableRow name={`سینا رضوانی `} date={`1400/3/1`} worth={`520000`} />
          <TableRow name={`سینا رضوانی `} date={`1400/3/1`} worth={`520000`} />
          <TableRow name={`سینا رضوانی `} date={`1400/3/1`} worth={`520000`} />
        </tbody>
      </table>
    </div>
  );
};

export default ListTransactions;
