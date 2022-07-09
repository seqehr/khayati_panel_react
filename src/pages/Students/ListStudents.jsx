// Components
import TableRow from "./TableRow";

const ListMembers = (props) => {
  return (
    <div>
      <table className="w-full overflow-hidden rounded-2xl">
        <thead
          className={`${"text-right"} bg-[#80808033] text-black dark:text-white `}
        >
          <th className="px-2 py-2 pr-4">{`نام کامل`}</th>
          <th>{`تاریخ ثبت نام`}</th>

          <th></th>
          <th></th>
        </thead>
        <tbody className="bg-background2-light dark:bg-background2-dark ">
          <TableRow name={`محمد علیرضایی `} date={`1400/3/1`} />
          <TableRow name={`محمد علیرضایی `} date={`1400/3/1`} />
          <TableRow name={`محمد علیرضایی `} date={`1400/3/1`} />
          <TableRow name={`محمد علیرضایی `} date={`1400/3/1`} />
        </tbody>
      </table>
    </div>
  );
};

export default ListMembers;
