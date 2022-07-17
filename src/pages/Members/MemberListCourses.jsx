// Components
import { useEffect, useState } from "react";
import { MemberListCoursesService } from "../../services/MemberServices";
import Skeleton from "react-loading-skeleton";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

// css
import "react-loading-skeleton/dist/skeleton.css";
// icons
import { AiFillCheckCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";

const MemberListCourses = (props) => {
  const { id: memberId } = useParams();
  const [memberListCourses, setMemberListCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skeletonItems, setSkeletonItems] = useState([]);
  useEffect(() => {
    MemberListCoursesService(memberId).then((res) => {
      setLoading(false);
      setMemberListCourses(res.data.data.courses);
    });
    let SkeletonItems = [];
    for (let index = 0; index < 6; index++) {
      SkeletonItems.push(".");

      if (index == 5) {
        setSkeletonItems(SkeletonItems);
      }
    }
  }, []);

  return (
    <div className="grid grid-cols-12 container">
      {loading ? (
        <div className="col-span-12 grid grid-cols-12  ">
          {skeletonItems.map((element) => (
            <tr className="col-span-6  md:col-span-4 flex flex-col mb-8">
              <td className="w-full px-4 h-44 py-2">
                <Skeleton className="h-full" />
              </td>
              <td className="w-full px-4 h-10 py-1">
                <Skeleton className="h-full" />
              </td>
              <td className="w-full px-4 h-10 py-1">
                <Skeleton className="h-full" />
              </td>
              <td className="w-full px-4 h-10 py-1 flex ">
                <span className="w-[30%] pl-3">
                  <Skeleton className="h-full" />
                </span>
                <span className="w-[70%] ">
                  <Skeleton className="h-full" />
                </span>
              </td>
            </tr>
          ))}
        </div>
      ) : (
        <>
          {memberListCourses.map((item) => (
            <Card className="m-5 p-2 md:col-span-4 col-span-6">
              <CardHeader color="blue" className="relative h-56">
                <img src={item.img} className="h-full w-full" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="my-4 mx-2">
                  {item.name}
                </Typography>
                <Typography className="my-2 mx-2 text-right">
                  {item.excerpt}
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography variant="small ">
                  <p className="flex">
                    <span className="text-green-light text-xl pl-1">
                      <AiFillCheckCircle />
                    </span>
                    {item.price} ریال پرداخته شده
                  </p>
                </Typography>
              </CardFooter>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default MemberListCourses;
