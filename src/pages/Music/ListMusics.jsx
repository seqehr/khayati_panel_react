// Components
import TableRow from "./TableRow";

const ListMusics = (props) => {
  return (
    <div>
      <table className="w-full overflow-hidden rounded-2xl">
        <thead
          className={`${"text-right"} bg-[#80808033] text-black dark:text-white `}
        >
          <th className="px-2 py-2 pr-4">{`نام موزیک`}</th>
          <th>{`تاریخ ایجاد`}</th>
          <th>{`حجم موزیک`}</th>

          <th></th>
          <th></th>
        </thead>
        <tbody className="bg-background2-light dark:bg-background2-dark ">
          <TableRow
            name={`من باهات قهرم تتلو `}
            date={`1400/3/1`}
            size={`8 MB`}
          />
          <TableRow
            name={`من باهات قهرم تتلو `}
            date={`1400/3/1`}
            size={`8 MB`}
          />
          <TableRow
            name={`من باهات قهرم تتلو `}
            date={`1400/3/1`}
            size={`8 MB`}
          />
          <TableRow
            name={`من باهات قهرم تتلو `}
            date={`1400/3/1`}
            size={`8 MB`}
          />
          <TableRow
            name={`من باهات قهرم تتلو `}
            date={`1400/3/1`}
            size={`8 MB`}
          />
        </tbody>
      </table>
    </div>
  );
};

export default ListMusics;
