import { NOTIFICATION } from "@/types/notification";
import Image from "next/image";

const notificationData: NOTIFICATION[] = [
  {
    fullname: "John Doe",
    date: new Date("2024-03-21"), // Crée une instance de Date représentant le 21 mars 2024
    hour: "14:30", // Par exemple, représentation de l'heure sous forme de chaîne
    phone: 1234567890,
    result: "En attente",
  },
  {
    fullname: "John Doe",
  date: new Date("2024-03-21"), // Crée une instance de Date représentant le 21 mars 2024
  hour: "14:30", // Par exemple, représentation de l'heure sous forme de chaîne
  phone: 1234567890,
  result: "En attente",
  },
  {
     fullname: "John Doe",
    date: new Date("2024-03-21"), // Crée une instance de Date représentant le 21 mars 2024
    hour: "14:30", // Par exemple, représentation de l'heure sous forme de chaîne
    phone: 1234567890,
    result: "En attente",
  },
  {
    fullname: "John Doe",
    date: new Date("2024-03-21"), // Crée une instance de Date représentant le 21 mars 2024
    hour: "14:30", // Par exemple, représentation de l'heure sous forme de chaîne
    phone: 1234567890,
    result: "En attente",
  },
  {
    fullname: "John Doe",
  date: new Date("2024-03-21"), // Crée une instance de Date représentant le 21 mars 2024
  hour: "14:30", // Par exemple, représentation de l'heure sous forme de chaîne
  phone: 1234567890,
  result: "En attente",
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Resent Tests
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Patient
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Hour
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Phone number
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Result
            </h5>
          </div>
        </div>

        {notificationData.map((notification, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === notificationData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              {/*<div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>*/}
              <p className="hidden text-black dark:text-white sm:block">
                {notification.fullname}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{notification.date.toLocaleDateString()}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${notification.hour}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{notification.phone}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{notification.result}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
